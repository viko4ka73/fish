import { mainWavesStart, mainFishStart, mainFishEnd } from "../assets/images";
import { Button } from "../components";

const MainScreen = () => {
    return (
        <div className="bg-light-blue z-10 w-full pt-10  h-[610px] mobile-screen">
            <div className="flex justify-between items-center pt-[2%]  ">
                <img
                    src={mainFishEnd}
                    alt='waves'
                    className="mobile-img-end w-[400px]"
                />
                <div className="flex flex-col items-center mb-6 max-[611px]:px-0.5 max-[890px]:px-1 max-[965px]:px-5  max-[410px]:mb-2">
                    <h1 className="text-[64px] mobile-text-header font-montserrat font-bold leading-[123%]  text-white text-center mb-16 max-md:mb-3">
                        <span className="text-dark-blue text-[74px] mobile-text-span "> Окунитесь </span>
                        в мир  морепродуктов с нашим  разнообразием и качеством!</h1>
                    <Button label="Оформить заказ" href="/order" Order={true} />
                </div>
                <img
                    src={mainFishStart}  
                    alt='waves'
                    className="mobile-img-start w-[500px]"
                />
            </div>
            <div>
            </div>
            <img
                src={mainWavesStart}
                alt='waves'
                className="w-full "
            />
        </div>
    )
}

export default MainScreen