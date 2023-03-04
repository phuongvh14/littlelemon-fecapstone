import GreekSalad from '../components/assets/greek-salad.jpg'
import Bruschetta from '../components/assets/bruschetta.webp'
import Dessert from '../components/assets/lemon-dessert.jpg'
import IndividualCard from './IndividualCard'

export default function SpecialCards() {
    const specialMenus = [
        {
            image: GreekSalad,
            title: "Greek Salad",
            price: "$8.99",
            description: "Yummy greens made with fresh lettuce, fresh red ripe tomatoes, fresh watery cucumbers, red onions, olives, Greek feta, and various fresh herbs.",
            order: "Order a delivery"
        },
        {
            image: Bruschetta,
            title: "Bruschetta",
            price: "$7.25",
            description: "A true delight made up of juicy cherry tomatoes tossed with toasted garlic, balsamic vinegar, fresh basil, and spooned over crusty grilled bread.",
            order: "Order a delivery"
        },
        {
            image: Dessert,
            title: "Lemon Dessert",
            price: "$5.50",
            description: "A crumbly, sweet, cookie-like crust surrounding classic lemon curd filling with just enough butter to make it deliciously creamy.",
            order: "Order a delivery"
        }
    ]

    const specialMenuItems = specialMenus.map(menu => {
        const image = menu.image
        const title = menu.title
        const price = menu.price
        const description = menu.description
        const order = menu.order
        return(
            <IndividualCard image={image} title={title} price={price} description={description} order={order} />
        )
    })

    return(
        <div className="special-cards">
            {specialMenuItems}
        </div>
    )
}