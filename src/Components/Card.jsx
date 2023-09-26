import { Link } from "react-router-dom";


const Card = ({ card }) => {

    const { picture, title, category, category_bg_color, card_bg_color, text_color, description, price, id } = card;

    return (
        <div>
            <Link to={`/donationdetails/${id}`}>
            <div className="card w-full">
            <figure><img className="w-full h-[200px]" src={picture}  /></figure>
            <div style={{
                backgroundColor: `${card_bg_color}`,
            }} className="card-body">

                <div className="flex">
                <h2 style={{
                    color: `${text_color}`,
                    backgroundColor: `${category_bg_color}`,
                }} className="card-title">{category}</h2>
                </div>

                <p style={{
                    color: `${text_color}`,
                }}>{title}</p>
                
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Card;