import { useEffect  } from "react";
import Layout from "../layouts/Layout";
// import axios  from "axios";
// useEffect(() => {
//     const fetchData = async () => {
//        const url = "http://127.0.0.1:1337/";
//         try {
//             const response = await axios.get(url)
//             if (response.status == 200) {
//                 const dataArray = response.data
//                 console.log( dataArray.map((array: { name: string; })=>(
//                     array.name
//                 )))
//                 // dataArray.map((record) => (
//                 //     record.name))
//             }
//         } catch (error) {
//            console.log(error)
//         }
//     }
// }, []);

const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    // Создаем объект с данными, которые будем отправлять в формате JSON
    const dataToSend = {
        username: login,
        password: password,
    };
    try {
        // Выполняем POST-запрос с данными в формате JSON
        const response = await axios.post(`http://127.0.0.1:1337/auth`, dataToSend);
        // Обработка успешного ответа сервера
        console.log("Успешно отправлено:", response.data);

        // Дополнительные действия после успешной отправки, например, перенаправление пользователя
    } catch (error) {
        // Обработка ошибки
        console.error("Произошла ошибка:", error);
    }
};

export default handleSubmit;

 