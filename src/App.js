
import { useState } from 'react';
import './App.css';

function App() {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setbmiStatus]=useState("")
  const [errorMessage,seterrorMessage]=useState(false)
  function calculateBMI(){
    const isValidHeight=/^\d+$/.test(height);
     const isValidWeight=/^\d+$/.test(weight);
      if(isValidHeight && isValidWeight){      
        const heightInMeters=height/100;
        const bmivalue= weight/(heightInMeters * heightInMeters);
        setBmi(bmivalue.toFixed(2))
        if(bmivalue < 18.5){
          setbmiStatus("Under Weight")
        }
        else if(bmivalue>=18.5 && bmivalue<=24.9){
          setbmiStatus("Normal Weight")
        }
        else if(bmivalue>=25 && bmivalue<=29.9){
          setbmiStatus("Over Weight")
        } 
        else{ setbmiStatus("Obese") 
        }
      seterrorMessage("")}
        else{
          setbmiStatus("");
          setBmi(null)
          seterrorMessage("Please enter valid numeric values for height and weight.")
      }
  };
  function clear(){
    setHeight("")
    setWeight("")
    setBmi(null)
    setbmiStatus("")
    seterrorMessage(false)

  }
  return (
    <>
    <div className='bmi-calculator'>
      <div className="box"></div>
      <div className='data'>
        <h1>BMI Calculator</h1>
       {errorMessage && <p className='error'>{errorMessage}</p>} 
        <div className="input-container">
          <label htmlFor='height'>Height (cm)</label>
          <input type="text"
          id='height'
          value={height}
          onChange={(e)=>setHeight(e.target.value)}
          required  />
          </div>
          
          <div className="input-container">
          <label htmlFor='weight'>Weight (kgs)</label>
          <input type="text"
          id='weight'
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          required />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={clear}>Clear</button>
         {bmi !== null && <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>} 
      </div>


    </div>
     
    </>
  );
}

export default App;
