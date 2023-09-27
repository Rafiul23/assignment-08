import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ cards, mySearchKey }) => {

    const [displayCard, setDisplayCard] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearch(mySearchKey)
        const selectedCards = cards.filter(card => card.category.toLowerCase().indexOf(mySearchKey.toLowerCase()) != -1);
        setDisplayCard(selectedCards)

    }, [mySearchKey, cards])


    useEffect(() => {
        setSearch(mySearchKey)
        setDisplayCard(cards)

    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4 py-10'>
            {
                displayCard?.map((card) => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;