import Form from "./Form"
export default function Reservation() {
    return (
        <div className="reservation-section-wrapper">
            <div className="reservation-content">
                <div className="reservation-text">
                    <h1>Thank you for choosing to spend your quality time with us!</h1>
                    <p>
                        Little Lemon has been proudly serving thousands of happy customers since 2007.
                        We make every effort to ensure that each of your visit is memorable with delicious
                        food and cozy atmosphere.
                    </p>
                </div>
                <div className="reservation-form">
                    <h2>Reserve a table</h2>
                    <p>Please fill out the form below and submit it to get your reservation number.</p>
                    <Form />
                </div>
            </div>
        </div>
    )
}