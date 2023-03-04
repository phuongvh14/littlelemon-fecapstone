import IndividualCustomer from "./IndividualCustomer"


export default function CustomerCards() {
    const customers = [
        {
            name: "Zendaya Johnson",
            feedback: "The food was really delicious. Can't wait for my next visit!"
        },
        {
            name: "Mina Kang",
            feedback: "Everyone was super nice and the food, needless to say, was 10/10."
        },
        {
            name: "Hannah Wright",
            feedback: "My favorite dish was Bruschetta. Never had such good bruschetta before"
        },
        {
            name: "Perla Martinez",
            feedback: "I was in Chicago for a short time, but Little Lemon was definitely a highlight."
        },
        {
            name: "Andrew Chen",
            feedback: "The food was so good that I'm very tempted to try everything in the menu!"
        },
        {
            name: "Ellie Mayweather",
            feedback: "The cozy atmpsphere and wonderful food is what I love most about Lil Lemon"
        },
        {
            name: "Cody Nguyen",
            feedback: "My favorite dish was Greek Salad. It was very yummy and healthy!"
        },
        {
            name: "Woo Young Woo",
            feedback: "First time I tried something other than Korean Gimbab! Quite good, I would say!"
        }
    ]

    const eachCustomer = customers.map(customer => {
        const name = customer.name
        const feedback = customer.feedback
        return (
            <IndividualCustomer name={name} feedback={feedback} />
        )
    })
    return (
       <div className="customer-cards">
            {eachCustomer}
       </div>
    )
}