/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const CheckoutForm = ({payProperty}) => {
    // console.log(payProperty.offerAmount);
  const stripe = useStripe();
  const element = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
  const [transactionId, setTransactionId] = useState("");

  const totalPrice =(payProperty?.offerAmount);

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "Green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
 
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      // console.log('payment error', error);
      setSuccess("");
    } else {
      setError("");
      console.log("Payment method", paymentMethod);
      setSuccess("Payment is successfully done.");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payPropertyInfo = {
            status: "Bought",
            transactionId : paymentIntent.id,
          };
      
          axiosSecure
            .patch(`/offeredProperty/${payProperty._id}`, payPropertyInfo)
            .then((result) => {
              if (result.data.modifiedCount > 0) {
                Toast.fire({
                  icon: "success",
                  title: "Property Verified Successfully by Admin.",
                });
              }
            })
            .catch(() => {
              Toast.fire({
                icon: "error",
                title: "Something is Wrong!",
              });
            });
        console.log("transaction id:", paymentIntent.id);
      
        
        // now save payment data to server
        // const payment = {
        //   email: user.email,
        //   price: totalPrice,
        //   transactionId: paymentIntent.id,
        //   date: new Date(), // utc date convert. use moment js to
        //   propertyID: payProperty._id, 
        //   status: "pending",
        // };

        // const res = await axiosSecure.post("/payment", payment);
        // console.log("payment save", res.data);
        // navigate('/dashboard/paymentHistory')
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement>
          options=
          {{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        </CardElement>
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-green-600 font-bold">{success}</p>
        <p className="text-red-600 font-bold">{error}</p>
        {transactionId && (
          <p>
            Your transaction Id :{" "}
            <span className="text-blue-600">{transactionId}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
