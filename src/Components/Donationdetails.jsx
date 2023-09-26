

const Donationdetails = ({details}) => {

    const {picture, text_color, category, description, price} = details;

    return (
        <div>
            <div className="container mx-auto">

                <div className="relative py-5">
                <div className="flex justify-center">
                    <img src={picture} className="w-full h-3/4" />
                    
                </div>
                <div className="absolute bottom-5 opacity-50 w-full bg-black h-24">
                   
                </div>
                <button style={{
                        backgroundColor: `${text_color}`,
                    }} className="btn text-white absolute bottom-10 left-5 z-10 border-none">Donate ${price}</button>
                </div>
                


                <h2 className="text-3xl py-4 font-bold">{category}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Donationdetails;