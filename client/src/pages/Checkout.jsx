import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "./CheckoutForm"
import "./Checkout.css"

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")

export default function Checkout() {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [])

    const appearance = {
        theme: 'stripe',
    }
    const options = {
        clientSecret,
        appearance,
    }

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}