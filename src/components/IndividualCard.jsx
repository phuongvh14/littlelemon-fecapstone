import { NavLink } from "react-router-dom"

export default function IndividualCard({image, title, price, description, order}) {
    return (
        <div className="special-card-container" id={title}>
            <div className="image-container">
                <img src={image} alt={"Special menu"} />
            </div>
            <div className="special-card-text">
                <div className="special-card-title">
                    <h3>{title}</h3>
                    <h3 className="price-tag">{price}</h3>
                </div>
                <p>{description}</p>
                <NavLink to="#">
                    <div className="delivery">
                        <h4>{order}</h4>
                        <i class="fa-solid fa-motorcycle"></i>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}