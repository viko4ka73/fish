import { useEffect  } from "react";
import axios  from "axios";
useEffect(() => {
    const fetchData = async () => {
       const url = "http://127.0.0.1:1337/";
        try {
            const response = await axios.get(url)
            if (response.status == 200) {
                const dataArray = response.data
                console.log( dataArray.map((array: { name: string; })=>(
                    array.name
                )))
                // dataArray.map((record) => (
                //     record.name))
            }
        } catch (error) {
           console.log(error)
        }
    }
}, []);

 