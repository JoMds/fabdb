import React, { useEffect, useState } from "react";
import Search from "./search/search.jsx";
import Cards from "./cards/cards.jsx";

export default function Component() {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState();

    useEffect(() => {
        const fethItems = () => {
            fetch(`https://fabdb-deck-manager-35psgbe7tq-uc.a.run.app/deck/${query}`, {
                method: "GET"
            })
                .then((r) => r.json())
                .then((r) => {
                    setCards(r.cards)
                    console.log(r, "r", query, "query")
                })
        }
        fethItems();
    }, [query])

    return (
        <div>
            <Search getQuery={(e) => setQuery(e)} />
            <Cards options={cards} />
            
            {/* {cards &&
                cards.map(C=>(<div>
                    {C.name}
                </div>))
            } */}
        </div>

    );
}

