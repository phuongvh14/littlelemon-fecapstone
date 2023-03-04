export default function IndividualCustomer({name, feedback}){
    return (
        <div className="customer-card-container">
            <div className="symbol-container">
                <i class="fa-regular fa-lemon fa-2xl"></i>
                <i class="fa-regular fa-lemon fa-2xl"></i>
                <i class="fa-regular fa-lemon fa-2xl"></i>
            </div>
            <div className="customer-text-container">
                <div className="customer-name">
                    <h3>{name}</h3>
                </div>
                <p>{feedback}</p>
            </div>
        </div>
    )
}