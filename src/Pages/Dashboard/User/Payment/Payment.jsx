import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { useLoaderData } from "react-router-dom";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    const [payProperty] = useLoaderData()
    return (
        <div className="space-y-20">
           <SectionTitle heading={'Payment'}></SectionTitle>
           <Elements stripe={stripePromise}>
            <CheckoutFrom payProperty={payProperty}></CheckoutFrom>
           </Elements>
        </div>
    );
};

export default Payment;