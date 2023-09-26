

const ShowDonated = ({details}) => {

    const {picture, text_color, title, category, category_bg_color, card_bg_color, price} = details;

    return (
        <div className="flex w-full">
            <img className="flex-1" src={picture} alt="" />
            <div className="flex-1 p-4 space-y-2" style={{
                backgroundColor: `${card_bg_color}`
            }}> 
                <div className="flex">
                <h2 style={{
                     color: `${text_color}`,
                     backgroundColor: `${category_bg_color}`,
                }}>{category}</h2>
                </div>
                <p className="font-bold">{title}</p>
                <p className="font-bold" style={{
                    color: `${text_color}`,
                }}>$ {price}</p>
                <button className="p-2 rounded-lg" style={{
                    backgroundColor: `${text_color}`,
                    color: "white",
                    fontWeight: "bold" ,
                }}>View Details</button>
            </div>
        </div>
    );
};

export default ShowDonated;