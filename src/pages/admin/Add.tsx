import {Link, useNavigate} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {useState} from "react";


const Add = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const navigate = useNavigate()
    const [nameValue, setNameValue] = useState("");

    const saveForm: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
        try {
            const response = await axios.post('http://127.0.0.1:1337/admin', data,
                {
                headers: {
                    "Content-Type": "multipart/form-data",
                 },
                }
            )
            if (response.status === 200) {
                console.log("data successfully added")
                console.log(response.data)
                navigate("/admin")
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="m-4 p-4 font-montserrat font-normal">
            <header className=''>
                <nav className='flex justify-between items-center max-container'>
                    <div><Link to="/admin">Все товары</Link></div>
                    <div><Link to="/">Главная страница </Link></div>
                </nav>
            </header>

            <div className="p-4" >
                <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit(saveForm)}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Название</label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Введите название"
                            {...register("name", {
                                required: {value: true, message: "Необходимо ввести Название!"},
                                min: {value: 2, message: "Название не может быть короче 2 символов!"},
                            })}
                            onChange={(e) => {
                                setNameValue(e.target.value)
                            }}
                        />
                        {errors.name && <div className="text-red-500">{String(errors.name.message)}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Категория</label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Введите категорию"
                            {...register("category", {
                                required: {value: true, message: "Необходимо ввести категорию!"},
                                min: {value: 2, message: "Категория не может быть короче 2 символов!"},
                                validate: (value) => value !== nameValue || 'Название и категория не должны совпадать'
                            })}
                        />
                        {errors.category && <div className="text-red-500">{String(errors.category.message)}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Цена</label>
                        <input
                            className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.price && "error"}`}
                            type="number"
                            placeholder="Введите цену"
                            {...register("price", {
                                required: {value: true, message: "Необходимо ввести цену!"},
                                min: {value: 2, message: "Цена не может быть короче 2 символов!"}
                            })}
                        />
                        {errors.price && <div className="text-red-500">{String(errors.price.message)}</div>}
                    </div>

                        <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Описание</label>
                        <textarea
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Введите описание"
                            {...register("description", {
                                required: {value: true, message: "Необходимо ввести описание!"},
                                min: {value: 10, message: "Описание не может быть короче 10 символов!"}
                            })}
                        />
                        {errors.description && <div className="text-red-500">{String(errors.description.message)}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Фото</label>
                        <input
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="file"
                            multiple
                            {...register("photos", {
                                required: {value: true, message: "Необходимо добавить хотя бы 1 фото!"},
                            })}
                        />
                        {errors.photos && <div className="text-red-500">{String(errors.photos.message)}</div>}
                    </div>

                    <div className="text-center">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500
                        rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue
                        active:bg-blue-800" type="submit">
                            Добавить
                        </button>
                    </div>

                </form>
            </div>
        </div>


    )
}

export default Add