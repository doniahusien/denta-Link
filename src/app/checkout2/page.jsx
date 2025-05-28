"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import checkoutImage from "../../../public/images/Checkout/checkout.svg";
import { useDispatch } from "react-redux";
import { checkoutOrder } from "@/redux/features/cart/cartThunk";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RNvVqQ8IpTGyVWqXR5m3znDfBx4KtKjTVTKlBCU7zhDNfvFL7pskNwzsxD4OAPLEdVMtdZrSxHLFzc2Kkye2tVx00wxRoFjjn"
);

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!stripe || !elements || !email) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setProcessing(true);

    try {
      const result = await dispatch(checkoutOrder({ email }));
      const clientSecret = result.payload?.clientSecret;

      if (!clientSecret) throw new Error("Failed to get client secret");

      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: { email },
          },
        }
      );

      if (error) {
        setErrorMessage(error.message);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        alert("Payment succeeded!");
        router.push("/order-success");
      }
    } catch (err) {
      setErrorMessage(err.message);
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
          hidePostalCode: true,
        }}
      />
      {errorMessage && (
        <div className="text-red-600 font-semibold">{errorMessage}</div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-green-500 text-white py-3 w-full rounded-lg text-lg hover:bg-green-600 transition"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen my-44 bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-4xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={checkoutImage}
              alt="Checkout"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Pay with Card
            </h2>

            <Elements stripe={stripePromise}>
              <StripeCheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PaymentPage;
