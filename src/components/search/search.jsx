import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";

export default function Component({ getQuery}) {
    const [text, setText] = useState("");

    const onChange=(e) =>{
        const lastPart = e.split("/").at(-1);
        setText(lastPart)
        getQuery(lastPart)
        console.log(lastPart, "e")
    }


    return (<section>
        <form>
            <label >Deck</label>
            <input type="text"
                name="deck"
                // value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="place URl"
                autoFocus
            />
            <button type="submit" >asd</button>
        </form>
    </section>)
}