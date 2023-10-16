import { mainWavesStart } from "../assets/images";
import { mainFishStart } from "../assets/images";
import { mainFishEnd } from "../assets/images";
import { Button } from "../components";

const MainScreen = () => {
    return (
        <div className="bg-light-blue z-10 w-full max-2xl:h-[560px] pt-10  h-[580px] ">
            <div className="flex justify-between items-center pt-[2%] ">
                <img
                    src={mainFishEnd}
                    alt='waves'
                    className=" w-[400px] min-[2600px]:w-[800px]"
                />
                <div className="flex flex-col items-center ">
                    <h1 className="text-[64px]  min-[2600px]:text-[80px] font-montserrat font-bold leading-none text-white-400 text-center max-2xl:text-[35px] mb-8">
                        <span className="text-dark-blue text-[74px]  min-[2600px]:text-[80px]  max-2xl:text-[41px]"> Окунитесь </span>
                        в мир  морепродуктов с нашим  разнообразием и качеством!</h1>
                    <Button label="Оформить заказ" href="/order" Order={true} />
                </div>
                <img
                    src={mainFishStart}
                    alt='waves'
                    className=" w-[400px] min-[2600px]:w-[800px]"
                />
            </div>
            <div>
            </div>
            <img
                src={mainWavesStart}
                alt='waves'
                className="w-full"
            />
        </div>
    )
}

export default MainScreen