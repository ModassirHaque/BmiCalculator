import "./BmiCalculator.css";
import  { useState } from "react";
export default function BmiCalculator(){
        const[weight,setWeight]=useState('');
        const[height,setHeight]=useState('');
        const[bmi,setBmi]=useState(null);
        const[status,setStatus]=useState('');

        const calculateBmi=()=>{
            if(!weight || !height){
                alert('please enter both weight and height');
                return;
            }
            const heighInMeter=parseFloat(height)/100;
            const bmiValue=(parseFloat(weight)/(heighInMeter*heighInMeter)).toFixed(2);
            setBmi(bmiValue);
            let bmiStatus='';
            if(bmiValue<18.5){
                bmiStatus='Under Weight';
            }else if(bmiValue<24.9){
                bmiStatus='Normal Weight';
            }else if(bmiValue<29.9){
                bmiStatus='Over Weight';
            }else{
                bmiStatus='obesity';
            }
            setStatus(bmiStatus);
        };
    
    return(
        <div className="container">
            <h1>BMI Calculator</h1>
            <div className="input-group">
                <label>
                    Weight (kg):
                    <input
                    type="number"
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}
                    placeholder="Enter your weight"
                    />
                </label>
            </div>
            <div className="input-group">
                <label>
                    Height(cm):
                    <input
                    type="number"
                    value={height}
                    onChange={(e)=>setHeight(e.target.value)}
                    placeholder="Enter your height"
                    />
                </label>
            </div>
            <button onClick={calculateBmi}>Calculate</button>
            {bmi && (
               <div className='result'>
                <h3> Your BMI:{bmi}</h3>
                <h3>Status :{status}</h3>
                </div>
            )}
        </div>
    );

}