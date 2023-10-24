import Button from "./Button"


const Feedback = () => {
  return (
    <div className="">
  
  <div className="mb-4">
            <label className="block text-dark-blue">
                <span className="font-montserrat font-normal  text-3xl leading-none"> ФИО </span>
            </label>
            <input type="text" id="username" 
                name="username" className="w-full border border-gray-300 
             rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
        </div>
        <div className="mb-4">
            <label className="block text-dark-blue">
                <span className="font-montserrat font-normal  text-3xl leading-none"> Телефон </span>
            </label>
            <input type="text" id="password" 
                name="password" className="w-full border
             border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-main-blue" />
        </div>
        <Button label="Отправить заявку" Enter={true}  />
</div>
  )
}

export default Feedback