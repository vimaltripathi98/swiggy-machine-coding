import "./style.css"

const Card = ({ data }) => {
    const { title, description, price, discountPercentage, rating, images } = data
    return (
        <div className="main-card">
            <h2>{title}</h2>
            <img src={images} alt="images" className="images" />
            <div>
                <span>{price}</span>
                <span>{discountPercentage}</span>
                <span>{rating}</span> 
                <span>
                    {description}
                </span>
            </div>
        </div>
    )
}
export default Card