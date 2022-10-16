import React from "react"

export default function Component({options}){
    return(<div>
    {options && 
        options.map(O => (
            <div>
                {O.name}
            </div>
        ))
    }
    </div>)
}