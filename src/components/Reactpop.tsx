import { useState } from "react";

function Reactpop() {
    const [openpopup, setOpenpopup] = useState(false)

    return (
        <div>
            <button className="bg-red-400" onClick={() => setOpenpopup(true)}>hello</button>
            {
                openpopup &&
                <div>
                    <div>

                        <button className="bg-white" onClick={() => setOpenpopup(false)}>x</button>
                    </div>
                    <p className="text-green-300">pop message here</p>
                </div>




            }
        </div >

    );

}
export default Reactpop;


