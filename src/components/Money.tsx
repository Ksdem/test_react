import React, {useState} from 'react';



type FilterType="all"| "Dollars"|"RUBLS"
function Money() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>("all")

    let onFilterDollars = money;
    let onClickFilter = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    if (filter === "Dollars") {
        onFilterDollars = money.filter((i) => i.banknots === "Dollars")
    }
    if (filter === "RUBLS") {
        onFilterDollars = money.filter((i) => i.banknots === "RUBLS")
    }



    return (
        <div className="money">
            {onFilterDollars.map((i, index) => {
                return (
                    <>
                        <div key={index}>
                            <span>{i.banknots}</span>
                            <span>{i.value}</span>
                            <span>{i.number}</span>

                        </div>


                    </>
                )
            })}

            <button onClick={() => onClickFilter("Dollars")}>Dollars</button>
            <button onClick={() => onClickFilter("RUBLS")}>RUBLS</button>
            <button onClick={() => onClickFilter("all")}>all</button>


        </div>
    );

}

export default Money;
