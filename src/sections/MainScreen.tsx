import { mainWavesStart, mainFishStart, mainFishEnd } from "../assets/images";
import { Button } from "../components";

const MainScreen = () => {
    return (
        <div className="bg-light-blue z-10 w-full max-2xl:h-[600px] max-xl:h-[550px] max-lg:h-[330px]
        pt-10  h-[610px] max-[1800px]:h-[630px] ">
            <div className="flex justify-between items-center pt-[2%]  ">
                <img
                    src={mainFishEnd}
                    alt='waves'
                    className=" w-[400px] min-[2600px]:w-[800px] max-lg:hidden  max-xl:w-[330px]"
                />
                <div className="flex flex-col items-center  mb-6">
                    <h1 className="text-[64px] max-[1800px]:text-[55px] min-[2600px]:text-[80px] font-montserrat font-bold leading-[123%] text-white text-center max-2xl:text-[35px]  mb-16">
                        <span className="text-dark-blue text-[74px] max-[1800px]:text-[65px] min-[2600px]:text-[80px]  max-2xl:text-[41px]"> Окунитесь </span>
                        в мир  морепродуктов с нашим  разнообразием и качеством!</h1>
                    {/*<Button label="Оформить заказ" href="/order" Order={true} />*/}
                </div>
                <img
                    src={mainFishStart}
                    alt='waves'
                    className=" w-[500px] min-[2600px]:w-[800px] max-lg:hidden  max-xl:w-[350px]"
                />
            </div>
            <div>
            </div>
            <img
                src={mainWavesStart}
                alt='waves'
                className="w-full max-xl:mt-[30px]"
            />
        </div>
    )
}

export default MainScreen