import { Button } from "../components";
import { productions } from "../constants"
import { fishnetLeft, fishnetRight} from "../assets/images"
import ProductionCard from "../components/ProductionCard"

const Production = () => {
  return (
    <div className="bg-extralight-blue w-full ">
      <div className="flex flex-col bg-extralight-blue pt-[5%] ">
        <h2 className="text-dark-blue font-montserrat leading-normal  font-bold text-[64px] ml-12 mt-28">
          Продукция
        </h2>
        <img
          src={fishnetRight}
          alt='net'
          className="absolute right-0 z-0  max-2xl:w-[700px] w-[40%]"
        />
        <div className="grid grid-cols-3 z-10  mt-10">
          {productions.map((production) => (
            <ProductionCard key={production.name} {...production} />
          ))}
        </div>
     
      <div className="flex justify-end  mr-10 max-2xl:mr-14"> 
   
      <Button label="Вся продукция" href="/catalog" Catalog={true} />
     
      </div>
    
      </div>
      <img
          src={fishnetLeft}
          alt='net'
          className="absolute left-[-20px] z-0 bottom-60 max-2xl:w-[700px]  max-2xl:left-[-80px] w-[40%]"
        />
          
    </div>
    
  )
}

export default Production