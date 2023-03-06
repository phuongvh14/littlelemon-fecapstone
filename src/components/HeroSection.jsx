import Brothers from "../components/assets/brothers.jpg";

export default function HeroSection() {
    return (
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="hero-section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Founded in 2007 by two Italian brothers, Little Lemon has been proudly serving 
                        thousands of happy customers.
                        We specialize in traditional Mediterranean cuisine served with a modern twist. 
                    </p>
                    <a href='/reservation'>
                        <button class='btn'>Reserve a table</button>
                    </a>
                </div>
                <div className="hero-section-right">
                    <div className="image-box">
                        <img className="hero-section-img" src={Brothers} alt="Pictures of Adrian and Mario" />
                    </div>
                </div>
            </div>
        </div>
    )
}