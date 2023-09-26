import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donationdetails from './Donationdetails';

const Findcategory = () => {

    const [details, setDetails] = useState({});

    const {id} = useParams();

    const idInt = parseInt(id);

    const cards = useLoaderData();

    useEffect(()=>{
        const findCard = cards.find((card) => card.id === idInt);

        setDetails(findCard);
    },[]);

    

    return (
        <div>
            <Donationdetails details={details}></Donationdetails>
        </div>
    );
};

export default Findcategory;