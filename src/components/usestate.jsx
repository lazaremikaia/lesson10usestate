import { useState } from "react"
import "./usestate.css"
function Button() {

    const [count, setCound] =useState (0)

    const Increase = () => {
        setCound  (count + 1)
    }

        const lossnumber = () => {
            setCound (count - 1)
        }


    return (
        <div className="button-wrapper">
            <button className="button-click" onClick={lossnumber}>-</button>
            <button className="clicked-wrapper" >i was clicked {count} time</button>
            <button className="button-click" onClick={Increase}>+ </button>
        </div>
    )
    
}

export default Button