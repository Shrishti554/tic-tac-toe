import { useState } from "react";
import Card from "../Cards/Card";
function Grid({numberOfCrads}){


const [board ]=useState(Array(numberOfCrads).fill(""));


return (

    <div className="grid">
        {
            board.map((el , idx)=> < Card key={idx} />)
        }
    </div>
);}
export default Grid;





