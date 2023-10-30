import { useState } from "react";
import Button from "../Button"


const Feedback = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    return (
        <form >
            <div className="mb-4">
                <label className="block text-dark-blue p-2 ">
                    <span className="font-montserrat  font-medium  text-xl leading-none"> ФИО </span>
                </label>
                <input type="text" id="name"
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                    name="name" className="w-full border border-gray-300 
             rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
            </div>
            <div className="mb-4">
                <label className="block text-dark-blue p-2 ">
                    <span className="font-montserrat font-normal  text-xl leading-none"> Номер телефона </span>
                </label>
                <input type="tel" id="phone" value={phone}
                    onChange={(event) => setPhone(event.currentTarget.value)}
                    name="phone" className="w-full border
             border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
            </div>
            <div className="mt-4 flex justify-сenter">
                <Button type="submit" label="Отправить заявку" Delivery={true} ></Button>
            </div>
        </form>
    )
}

export default Feedback