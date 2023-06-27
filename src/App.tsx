import React from 'react';

import './App.css';

import Button from "./components/Button";
import Calc from "./components/Calc";
import Array from "./components/Array";
import Money from "./components/Money";

function App() {
    /*let onClick=(name:string)=>{
        console.log(name)
    }*/
    let Button1Foo = (id: number, name: string) => {
        console.log(id, name)
    }
    let Button2Foo = (id: number, name: string) => {
        console.log(id, name)
    }
    let Button3Foo = () => {
        console.log("im")
    }
    return (
        <div className="App">
            <div className="button">
                <Button name={"1"} callBack={() => {
                Button1Foo(1, "Ks")
            }}/>
                <Button name={"2"} callBack={() => {
                    Button2Foo(2, "Mat")
                }}/>
                <Button name={"3"} callBack={Button3Foo}/></div>

            <div><Calc/></div>
            <div><Array/></div>
            <div><Money/></div>



        </div>
    );


}

export default App;
