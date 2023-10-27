import React, { useEffect, useState } from "react";
import axios from "axios";
import { fishingMan, fishnetLeft, fishnetRight, serverDead } from "../assets/images";
import ProductionCard from "../components/ProductionCard";

interface Product {
  description: string;
  id: number;
  name: string;
  photos: string[];
  price: number;
  category: string;
  slug: string;
}

const Production = () => {
  const [apiData, setApiData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseProduct = await axios.get('http://127.0.0.1:1337/products');
        if (responseProduct.status === 200 && responseProduct.data.status === 200) {
          setApiData(responseProduct.data.data);
        } else {
          setError("Ошибка при получении данных с сервера.");
        }
      } catch (error) {
        setError("Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-extralight-blue w-full pb-20">
      <div className="flex flex-col bg-extralight-blue pt-[4%] max-sm:pt-0  ">
        <h2 className="text-dark-blue font-montserrat leading-normal  text-[74px] font-bold  mobile-text ml-16 mt-20 max-sm:mt-10  max-sm:ml-14">
          Продукция
        </h2>
        {loading ? (
          <div className=" h-screen flex flex-col justify-center items-center mt-10">
            <div className="animate-spin inline-block w-20 h-20 border-[8px] border-current border-t-transparent text-dark-blue rounded-full dark:text-white" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div></div>

        ) : error ? (
          <div className="h-screen  flex flex-col justify-center items-center">
          <img
              src={serverDead}
              alt='fishing'
              className="pb-5 max-xl:w-[300px] max-lg:w-[200px]"
          />
          <span className="text-dark-blue text-[64px] mx-20  mobile-text-header leading-none font-montserrat font-bold text-center mb-10">
            {error}
          </span>
      </div>
        ) : apiData ? (
          <>
            <img src={fishnetRight} alt="net" className="absolute right-0 z-0 max-2xl:w-[700px] w-[45%] max-xl:hidden" />
            <div className="grid grid-cols-3 gap-2 z-[1] mt-14 pl-8  max-sm:mt-8 max-sm:pl-4 pr-20  max-lg:grid-cols-2 max-sm:grid-cols-2 max-[450px]:grid-cols-1 ">
              {apiData.map((product) => (
                <ProductionCard key={product.id} {...product} />
              ))}
            </div>
            <img src={fishnetLeft} alt="net" className="absolute left-0 z-0 w-[41.5%] bottom-[15%]  max-xl:hidden" />
          </>
        ) : (
          <div className="h-screen flex flex-col justify-center items-center">
            <img
              src={fishingMan}
              alt='fishing'
              className="pb-5"
            />
            <span className="text-dark-blue text-[64px]  mx-20  leading-none mobile-text-header font-montserrat font-bold text-center mb-10">
              Извините рыбки уплыли...
              <br /> Ловим новых
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Production;
