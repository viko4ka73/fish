import axios from "axios";
import {useEffect, useState} from "react";

const Admin = () => {
  const [apiData, setApiData] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:1337/admin')
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

  console.log(apiData)

  return (
    <div className="m-4 p-4 bg-green-200 font-montserrat font-normal">
      <h1 className="text-center">Товары</h1>
    </div>
  )
}

export default Admin