import SpecialCards from "./SpecialCards"

export default function SpecialDishesSection() {
    return (
        <div className="specials-section-container">
            <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Order Online</button>
                </div>
            </div>
            <SpecialCards />
        </div>
    )
}