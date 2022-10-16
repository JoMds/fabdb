import React, { useEffect, useState } from "react";
import styles from "./search.module.scss";

export default function Component({ getQuery }) {

    const onChange = (e) => {
        const lastPart = e.split("/").at(-1);
        getQuery(lastPart)
        console.log(lastPart, "e")
    }


    return (<section className={styles.searchSection}>
        <form>
            <label >Deck</label>
            <input className={styles.searchInput} type="text"
                name="deck"
                // value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="place URl"
                autoFocus
            />
        </form>
    </section>)
}