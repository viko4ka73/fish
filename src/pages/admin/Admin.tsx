import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AdminNav} from "../../components"

const Admin = () => {

  interface Product {
    description: string;
    id: number;
    name: string;
    photos: string[];
    price: number;
    category: string;
    slug: string;
  }

  const [apiData, setApiData] = useState<Product[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:1337/products')
        if (response.status === 200 && response.data.status === 200) {
          setApiData(response.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return () => {}
  }, [])

  return (
      <div className="m-4 p-4 font-montserrat font-normal">
        <AdminNav />
        {apiData &&
            apiData.map((record, index) => (
                <Link to={`${record.id}`} key={index}>
                  <hr className="my-4 border-t-2 border-blue-200" />
                  <div className="border-1 m-4 p-4 rounded-lg hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="mb-4 flex gap-6">
                      {record.photos.map((photo, ind) => (
                          <img
                              src={`http://127.0.0.1:1337/${photo}`}
                              alt={`Фотография продукта №${ind}`}
                              className="w-64 h-64 object-cover object-center rounded-lg"
                          />
                      ))}
                    </div>
                    <div className="text-blue-800 font-semibold text-lg mb-2">
                      {record.name}
                    </div>
                    <div className="text-blue-600 mb-2">Цена: ${record.price}</div>
                    <div className="text-blue-600 mb-2">
                      Описание: {record.description}
                    </div>
                    <div className="text-blue-600">Категория: {record.category}</div>
                  </div>
                </Link>
            ))}
      </div>
  );
};

export default Admin