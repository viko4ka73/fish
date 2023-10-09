import axios from "axios/index";

const Admin = () => {
  const handleAdmin = async () => {
    // console.log(from)
    try {
      const response = await axios.get(`http://127.0.0.1:1337/admin`);
      console.log(response.data)
    } catch (error) {
      console.error('В запросе произошла ошибка:', error);
    }

  };
  return (
    <div className="bg-color green">
      <h1>Товары</h1>
    </div>
  )
}

export default Admin