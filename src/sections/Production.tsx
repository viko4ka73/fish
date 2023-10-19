import { Button } from "../components";
import { productions } from "../constants"
import { fishnetLeft, fishnetRight } from "../assets/images"
import ProductionCard from "../components/ProductionCard"

const Production = () => {
  return (
      <div className="bg-extralight-blue w-full">
        <div className="flex flex-col bg-extralight-blue pt-[4%] ">
          <h2 className="text-dark-blue font-montserrat leading-normal  font-bold text-[64px] ml-16 mt-20">
            Продукция
          </h2>
          <img
              src={fishnetRight}
              alt='net'
              className="absolute right-0 z-0 max-2xl:w-[700px] w-[45%]"
          />
          <div className="grid grid-cols-3 gap-2 z-[1] mt-14 pl-8 pr-20 max-[1700px]:grid-cols-2">
            {productions.map((production) => (
                <ProductionCard key={production.name} {...production} />
            ))}
          </div>
          <div className="flex justify-end  mr-20 max-2xl:mr-14 pb-20">
            <Button label="Вся продукция" href="/products" Catalog={true} />
          </div>
          <div className="relative">
            <img
                src={fishnetLeft}
                alt="net"
                className="absolute left-[-5px] z-0 max-2xl:w-[700px] max-2xl:left-[-80px] w-[41.5%] bottom-32"
            />
          </div>
        </div>
      </div>

  )
}

export default Production