import React from 'react';

type ButtonType={
    name:string,
    callBack:()=>void
}

function Button(props:ButtonType) {
let onClickHandler=()=>{
    props.callBack();
}
     return (
       <div className="App">
      <button onClick={onClickHandler}>{props.name}</button>

       </div>
     );

}

export default Button;
