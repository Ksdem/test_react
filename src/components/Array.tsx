import React from 'react';






function Array() {
    const topCars = [
        {manufacturer: "Geely Atlas Pro", model: "7DCT"},
        {manufacturer: "BMW", model: "m5cs"},
        {manufacturer: "Audi", model: "rs6"},
    ]
    let res = topCars.map((item,index) => {
        return <tr key={index}>
            <td>{item.manufacturer}</td>
            <td>{item.model}</td>
        </tr>
    })
    return (
        <div className="array">

            <table className="table">
                <thead>
                <tr>
                    <td>название авто</td>
                    <td>модель</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {res}
                </tbody>
            </table>


        </div>
    );

}

export default Array;
