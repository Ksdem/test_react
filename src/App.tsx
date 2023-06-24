import React from 'react';

import './App.css';

import Button from "./components/Button";
import Calc from "./components/Calc";

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
            <div className="button"><Button name={"1"} callBack={() => {
                Button1Foo(1, "Ks")
            }}/>
                <Button name={"2"} callBack={() => {
                    Button2Foo(2, "Mat")
                }}/>
                <Button name={"3"} callBack={Button3Foo}/></div>

            <div><Calc/></div>


        </div>
    );

    /*
        let foo1=()=>{
            console.log("100200")
        }
        let foo2=(id:string)=>{
            console.log(id);
        }

        return (
            <div className="App">
                <button onClick={foo1}>1</button>
                <button onClick={()=>{foo2("100200")}}>2</button>
            </div>)
    */

}

export default App;
