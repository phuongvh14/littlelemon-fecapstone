import Brothers from "../components/assets/brothers.jpg";

export default function Homepage() {
    return (
        <div className="hero-section-container">
            <div className="hero-section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    A family owned restaurant founded by two Italian brothers in 2007.
                    We specialize in traditional Mediterranean cuisine served with a modern twist. 
                </p>
                <a href='/reserve'>
                    <button class='btn'>Reserve a table</button>
                </a>
            </div>
            <div className="hero-section-right">
                <img className="hero-section-img" src={Brothers} alt="Pictures of Adrian and Mario" />
            </div>
        </div>
    )
}