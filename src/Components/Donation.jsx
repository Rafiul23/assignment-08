import { useEffect, useState } from "react";
import ShowDonated from "./ShowDonated";


const Donation = () => {

    const [isDonated, setDonated] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'));

        if(donatedItems){
            setDonated(donatedItems);
        } else {
            setNotFound('No money donated yet');
        }
    },[])

    return (
        <div>
            { notFound ? (
                <h2 className="text-center font-bold text-3xl">{notFound}</h2>
            ) : (<div>

                    <div className="grid container mx-auto p-5 grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        isShow ? isDonated.map(details => <ShowDonated key={details.id} details={details}></ShowDonated>) 

                        : isDonated.slice(0,4).map(details => <ShowDonated key={details.id} details={details}></ShowDonated>)
                    }
                    </div>
                    {isDonated.length > 4 && !isShow ? <button onClick={()=>setIsShow(!isShow)} className="p-2 rounded-lg bg-[#009444] text-white block mx-auto">
                    See More 
                    </button> : <button className="hidden"></button> }

            </div>
            )
                

            }
            
        </div>
    );
};

export default Donation;