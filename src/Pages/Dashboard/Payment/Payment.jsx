import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CeckOutForm from "./CeckOutForm";
import useCart from "../../../Hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

    return (
        <div className="mt-5">
            <SectionTitle heding={"payment"} subHeading={"Please pay to Eat."}></SectionTitle>
            <div>
                <h2 className="text-3xl font-semibold text-orange-700 text-center my-3 underline"> Your Total Amount: {totalPrice}$</h2>
              <Elements stripe={stripePromise}>
            <CeckOutForm></CeckOutForm>
              </Elements>
            </div>
            
        </div>
    );
};

export default Payment;