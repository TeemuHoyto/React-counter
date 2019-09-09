import React, { Component } from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      number:0
    }
  }
render(){
  const handleClickToIncrease = () =>{
    
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number +1)
  }

  const HandleClickToDecrease = () =>{
    (this.state.number <=0 ? this.setState({ number: 0 }) :
    this.setState({ number: this.state.number - 1 }))
    console.log(this.state.number - 1)
  }
  const HandleClickToMakeZero = () =>{
    console.log(0)
    this.setState({ number:0 })

  }

  return(
<div>
    <div className="masterContainer">
<h1>{this.state.number}</h1>

      {(() => {
       if(this.state.number === 0){
       return <div   className='backgroundGray'></div>
       }else if (this.state.number % 2){
     return <div   className='backgroundRed'></div>
       }else if (this.state.number % 10){
    return <div  className='backgroundBlue'></div>
       }else{
    return     <div   className='backgroundYellow'></div>
       
        }
      })()}
   

    </div>
    
<button className="Button1"onClick={handleClickToIncrease}>+1</button>

<button  className="Button2" onClick={HandleClickToDecrease}>-1</button>
<button  className="Button3" onClick={HandleClickToMakeZero}>0</button>
</div>
  )
}


}

export default App;
