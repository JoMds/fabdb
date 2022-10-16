import React, { useEffect, useState } from "react";
import Search from "./search/search.jsx";
import Cards from "./cards/cards.jsx";

export default function Component() {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://fabdb-deck-manager-35psgbe7tq-uc.a.run.app/deck/${query}`, {
            method: "GET"
        })
            .then((r) => r.json())
            .then((r) => {
                setCards(r.cards)
                // console.log(r, "r", query, "query")
                setLoading(false)
            })
    }, [query])

    return (
        <div>
            <Search getQuery={(e) => setQuery(e)} />

            <Cards options={cards} isLoading={loading} />

        </div>

    );
}

