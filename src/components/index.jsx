import React, { useEffect, useState } from "react";
import Search from "./search/search.jsx";
import Cards from "./cards/cards.jsx";

export default function Component() {
    const [cards, setCards] = useState([]);
    const [cost, setCost] = useState("");
    const [query, setQuery] = useState();
    const [loading, setLoading] = useState(true);
    // console.log(cost,"costos")

    useEffect(() => {
        fetch(`https://fabdb-deck-manager-35psgbe7tq-uc.a.run.app/deck/${query}`, {
            method: "GET"
        })
            .then((r) => r.json())
            .then((r) => {
                setCards(r.cards)
                setCost(r.deckCost)
                // console.log(r.deckCost, "r", query, "query")
                setLoading(false)
            })
    }, [query])

    return (
        <div>
            {cost}
            tst
            <Search getQuery={(e) => setQuery(e)} />
            <Cards options={cards} isLoading={loading} cost={cost} />
        </div>

    );
}

