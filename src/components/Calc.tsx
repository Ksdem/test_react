import React, {useState} from 'react';



function Calc() {
    let [a, setA] = useState(1)


    let Sum = () => {
        setA(++a);
        console.log(a);
    }
    let Zero = () => {
        setA(0);
        console.log(a);
    }


    return (
        <div className="calc">
            <div>{a}</div>

            <div className="zero">
                <button onClick={Sum}>Calc</button>
                <button onClick={Zero}>0</button>
            </div>


        </div>
    );

}

export default Calc;
