import React from 'react';
import {FilterType, IMoneyType} from "./Money";


type NewComponentType = {
    items: IMoneyType[]
    onFilterDollars: (nameButton: FilterType) => void;
}
const NewComponent = (props: NewComponentType) => {
    return (
        <div className="money">
            {props.items.map((money: IMoneyType, index) => {
                return (
                    <>
                        <div key={index}>
                            <span>{money.banknots}</span>
                            <span>{money.value}</span>
                            <span>{money.number}</span>

                        </div>


                    </>
                )
            })}

            <button onClick={() => props.onFilterDollars("Dollars")}>Dollars</button>
            <button onClick={() => props.onFilterDollars("RUBLS")}>RUBLS</button>
            <button onClick={() => props.onFilterDollars("all")}>all</button>


        </div>)

}


export default NewComponent;

