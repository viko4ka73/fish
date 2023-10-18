import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";

const Edit = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm()

    interface Product {
        available: boolean;
        description: string;
        id: number;
        name: string;
        photos: string[];
        price: number;
        category: string;
    }


    const [apiData, setApiData] = useState<Product | null>(null);
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:1337/admin/${params.id}`)
                if (response.status === 200) {
                    setApiData(response.data.data)
                    const { name, category, price, description, photos } = response.data.data
                    setValue("name", name)
                    setValue("category", category)
                    setValue("price", price)
                    setValue("description", description)
                    setValue("photos", photos)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        return () => {}
    }, [params.id, setValue])

    const saveForm: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await axios.put(`http://127.0.0.1:1337/admin/${params.id}`, data)
            if (response.status === 200) {
                navigate("/admin")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="m-4 p-4 font-montserrat font-normal">
            <header>
                <nav className='flex justify-between items-center max-container'>
                    <div><Link to="/admin">Все товары</Link></div>
                    <div><Link to={`/admin/${params.id}`}>Назад</Link></div>
                    <div><Link to="/">Главная страница </Link></div>
                </nav>
            </header>
            <hr className="my-4 border-t-2 border-blue-200" />
            <div className="p-4" >
                <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit(saveForm)}>
                    <div className="mb-4">
                        <label className="block text-sm mb-2">Название</label>
                        <input
                            defaultValue={apiData?.name ?? ""}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Введите название"
                            {...register("name", {
                                required: {value: true, message: "Необходимо ввести имя!"},
                                min: {value: 2, message: "Имя не может быть короче 2 символов!"}
                            })}
                        />
                        {errors.name && <div className="text-red-500">{String(errors.name.message)}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-2">Категория</label>
                        <input
                            defaultValue={apiData?.category ?? ""}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Введите категорию"
                            {...register("category", {
                                required: {value: true, message: "Необходимо ввести категорию!"},
                                min: {value: 2, message: "Категория не может быть короче 2 символов!"}
                            })}
                        />
                        {errors.category && <div className="text-red-500">{String(errors.category.message)}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-2">Цена</label>
                        <input
                            defaultValue={apiData?.price ?? ""}
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
                        <label className="block text-sm mb-2">Описание</label>
                        <textarea
                            defaultValue={apiData?.description ?? ""}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            placeholder="Введите описание"
                            {...register("description", {
                                required: {value: true, message: "Необходимо ввести описание!"},
                                min: {value: 10, message: "Описание не может быть короче 10 символов!"}
                            })}
                        />
                        {errors.description && <div className="text-red-500">{String(errors.description.message)}</div>}
                    </div>

                    {/*<div className="mb-4">*/}
                    {/*    <label className="block text-sm mb-2">Фото</label>*/}
                    {/*    <input*/}
                    {/*        defaultValue={apiData?.photos ?? ""}*/}
                    {/*        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"*/}
                    {/*        type="file"*/}
                    {/*        multiple*/}
                    {/*        {...register("photos", {*/}
                    {/*            required: {value: true, message: "Необходимо добавить хотя бы 1 фото!"},*/}
                    {/*        })}*/}
                    {/*    />*/}
                    {/*    {errors.photos && <div className="text-red-500">{String(errors.photos.message)}</div>}*/}
                    {/*</div>*/}

                    <div className="text-center">
                        <button className="px-4 py-2 text-white bg-blue-500
                        rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue
                        active:bg-blue-800" type="submit">
                            Сохранить
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Edit