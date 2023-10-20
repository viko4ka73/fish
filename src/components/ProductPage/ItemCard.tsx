import Button from "../Button"


const ItemCard = () => {
    return (
        <div className="w-full z-[1] flex mt-10 ">
            {/* <a href="#">
        <img className="w-[375px] h-[375px] object-cover object-center rounded-lg" alt="product image" />
             </a> */}
            <div>
                <div className="bg-white w-[400px] h-[400px]  rounded-lg">
                    Фото

                </div>
                {/* <div className="mt-20 w-full  ">
                    <h2 className="text-main-blue font-montserrat text-xl font-bold">Состав</h2>
                    <p className="text-main-blue" >_________________________________________</p>
                    <p  >Очень вкусная полезная рыбка!!</p>
                </div> */}
                
            </div>
            <div className="pt-5  ml-10 flex flex-col">
                {/* <a href="#">
       
              <h3 className="text-main-blue font-montserrat text-xl font-normal">{name}</h3>
                     </a> */}
                <h3 className="text-main-blue font-montserrat text-2xl font-bold">Имя рыбы</h3>
                <h2 className="text-main-blue font-montserrat text-xl font-normal">Имя рыбы</h2>
                <div className="flex items-center justify-between pt-3 ">
                    <span className="text-dark-blue font-montserrat text-xl font-semibold mr-10"> 000₽/кг</span>
                    <Button label="В корзину" inCart={true} />
                </div>
                <div ><p className="text-main-blue" >___________________________________________________</p></div>
                <div className="flex justify-between mt-4 ">
                 Тут описание
                </div>
            </div>
        </div>
    )
}

export default ItemCard