
import { productions } from "../constants"
import { fishnetLeft, fishnetRight } from "../assets/images"
import ProductionCard from "../components/ProductionCard"
import Button from "../components/Button"

const Production = () => {
  return (
    <div className="bg-extralight-blue w-full">
      <div className="flex flex-col bg-extralight-blue pt-[4%] max-sm:pt-0  ">
        <h2 className="text-dark-blue font-montserrat leading-normal  text-[74px] font-bold  mobile-text
           ml-16 mt-20 max-sm:mt-10  max-sm:ml-14">
          Продукция
        </h2>
        <img
          src={fishnetRight}
          alt='net'
          className="absolute right-0 z-0 max-2xl:w-[700px] w-[45%] max-xl:hidden"
        />
        <div className="grid grid-cols-3 gap-2 z-[1] mt-14 pl-8  max-sm:mt-8 max-sm:pl-4 pr-20  max-lg:grid-cols-2 
        max-sm:grid-cols-2 max-[450px]:grid-cols-1 ">
          {productions.map((production) => (
            <ProductionCard key={production.name} {...production} />
          ))}
        </div>
        <div className="flex justify-end  mr-20  pb-20 max-sm:pb-12 max-lg:mr-16 max-xl:mr-20 max-2xl:mr-28">
          <Button label="Вся продукция" href="/products" Catalog={true} />
        </div>
        <img
          src={fishnetLeft}
          alt="net"
          className="absolute left-0 z-0 w-[41.5%] bottom-[15%]  max-xl:hidden"
        />
      </div>
    </div>

  )
}

export default Production