import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import { useState } from "react";


const Home = () => {

    const [mySearchKey, setMySearchKey] = useState('');

    const cards = useLoaderData();

    const handleSearch = (event) =>{
        event.preventDefault()
        const search = event.target.text.value.toLowerCase().trim();
        setMySearchKey(search);
    }
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <Cards mySearchKey={mySearchKey} cards={cards}></Cards>
        </div>
    );
};

export default Home;