import { waves2 } from "../../assets/images";
import Cart from "../../components/CartPage/Cart";
import CartEmpty from "../../components/CartPage/CartEmpty";
import { ShopContext } from "../../context/ShopProvider";
import { useContext, useEffect, useState } from "react";

const CartShop = () => {
  const shopContext = useContext(ShopContext);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  useEffect(() => {
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  }, []); 

  if (!shopContext) {
    return (
      <div className="h-screen flex flex-col justify-center items-center mt-10">
        <div
          className="animate-spin inline-block w-20 h-20 border-[8px] border-current border-t-transparent text-dark-blue rounded-full dark:text-white"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const { cartItems } = shopContext;
  const hasItems = Object.values(cartItems).length > 0;

  const closeAlert = () => {
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  };

  return (
    <section className="bg-extralight-blue pt-20 pb-20">
      <img src={waves2} alt="waves" className="w-full pt-5" />   
      {hasItems ? (
        <Cart
          cartItems={cartItems}
          setShowSuccessAlert={setShowSuccessAlert}
          setShowErrorAlert={setShowErrorAlert}
        />
      ) : (
        <CartEmpty
          showErrorAlert={showErrorAlert}
          showSuccessAlert={showSuccessAlert}
          closeAlert={closeAlert}
        />
      )}
    </section>
  );
};

export default CartShop;
