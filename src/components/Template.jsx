import Background from "../components/assets/food-pic.jpg";

export default function GenericTemplate({text}) {
    return (
        <div className="details-content">
            <img className="bg-pic" src={Background} alt="Background" />
            <div className="bg-text">
                <h1>{text}</h1>
            </div>
        </div>
    )
}