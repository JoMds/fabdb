import React from "react"

export default function Component({ options, isLoading }) {
    console.log(    options,"options")
    return isLoading ? (<h1> Loading</h1>) : (
        <section>
            {options && options.map(O => (
                <div >{O.name}</div>
            ))}
        </section>
     )

}