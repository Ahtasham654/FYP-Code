import React from 'react';

 class App extends React.Component{
   constructor()
   {
     super()
     this.state={
       number:'',
       numberError:'',
   
     }
   }
   valid(){
     if(!this.state.number.length<11 ){
       this.setState(
         {numberError:"Number less then 11 digit"})
   }
   
   else{
     return true;
   }
  }
   submit(){
    this.setState(
      {numberError:""});
     if(this.valid()){
       alert("Form has been submitted");
     }
   }
   render(){
     return(
       <div className='App'>
         <h1>Login Form</h1>
         <input type='text' name='Number' placeholder='Enter Your Mobile Number' onChange={e=>{this.setState({number:e.target.value})}} />
         <p>{this.state.numberError}</p>
         <button className="Button" onClick={()=>this.submit()}>Continue</button>
       </div>
     )
   }
 }
export default App;
