import React from "react"
import styles from "./cards.module.scss"
import clsx from "clsx"

export default function Component({ options, isLoading, cost}) {
    console.log(cost, "costInsideChild")
    return isLoading ? (<h1> Loading...</h1>) : (
        <section className="">
            <div className={styles.header}>
                <div className={styles.w60}>Name</div>
                <div className={styles.w60}>Color</div>
                <div className={styles.w60}>Rariry</div>
                <div className={styles.w60} >Cost</div>
            </div>
            <div>Total Cost : {cost}</div>  
            {options && options.map(O => (
                <div key={` ${O.image} + ${O.cost}`} className={styles.stats}>
                    <div className={styles.w60}>{O.name}</div>
                    <div className={styles.w60}>{O.color}</div>
                    <div className={clsx(styles.w60, styles.red)}>{O.rarity}</div>
                    <div className={styles.w60}>{O.cardCost}&euro;</div>
                </div>
            ))}
        </section>
    )
}