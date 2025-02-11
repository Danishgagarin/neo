import './Payment.css'  // Renamed CSS file
import { useState } from "react";
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_4TbuO3pK4M2yHkHYzYTVfJlL');

const Checkout = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [dob, setDob] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSuccess('Payment Successful!')
        setError(null)
        setDob('')
        elements.getElement(CardElement).clear()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <CardElement />
            </div>

            <div>
                <label>Date of Birth</label>
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={false}>Pay</button>
            {error && <div>{error}</div>}
            {success && <div className="success-message">{success}</div>}
        </form>
    )
}

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <h1>Payment Page</h1>
            <Checkout />
        </Elements>
    )
}

export default Payment
