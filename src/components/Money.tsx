import React, {useEffect, useState} from 'react';
import NewComponent from "./NewComponent";


export type FilterType = "all" | "Dollars" | "RUBLS";

export type IMoneyType = {
    banknots: string;
    value: number;
    number: string;
}

const basedItems = [
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
];

function Money() {
    const [money, setMoney] = useState<IMoneyType[]>(basedItems);

    const [filter, setFilter] = useState<FilterType>("all")

    let onClickFilter = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    const getFilteredItems = (): IMoneyType[] => {
        if (filter === "Dollars") {
            return money.filter((i) => i.banknots === "Dollars")
        } else if (filter === "RUBLS") {
            return money.filter((i) => i.banknots === "RUBLS")
        } else {
            return money
        }
    }

    return (
        <NewComponent items={getFilteredItems()} onFilterDollars={onClickFilter}/>
    );

}

export default Money;
