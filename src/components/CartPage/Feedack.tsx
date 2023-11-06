import { useState } from "react";
import Button from "../Button"


const Feedback = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    return (
        <form >
            <div className="mb-4 mt-4">
                <label className="block text-dark-blue">
                    <span className="font-montserrat  font-medium   leading-none text-lg"> ФИО </span>
                </label>
                <input type="text" id="name"
                       value={name}
                       onChange={(event) => setName(event.currentTarget.value)}
                       name="name" className="w-full border border-gray-300
             rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
            </div>
            <div className="mb-4">
                <label className="block text-dark-blue ">
                    <span className="font-montserrat font-normal  leading-none text-lg"> Номер телефона </span>
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