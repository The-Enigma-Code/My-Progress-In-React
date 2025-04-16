import React, {  useRef, useState } from 'react'
import Generator from './Generator';
import DisplayOtp from './DisplayOtp';
import InputField from './InputField';
const Main = () => {
const [otp,setOtp]= useState('');
const [showGeneratedOtp,setShowGeneratedOtp] = useState(false);
const [inputpOtp,setInputpOtp]= useState('');
const otpInputRef = useRef(null);

// useEffect(()=>{
//     if(showGeneratedOtp && otpInputRef.current){
//             otpInputRef.current.focus(); //does here Main(parent) isn't waitng for <InputField/>(child rendering) after condition is met
//     }
// },[showGeneratedOtp])
  return (
    
 
    <div className='otpCont'> 

      <Generator otp={otp} setOtp={setOtp} setShowGeneratedOtp={setShowGeneratedOtp}/>
      {showGeneratedOtp && <div className='inpAndDispCont'><DisplayOtp otp={otp}/> <InputField propRef={otpInputRef} setInputpOtp={setInputpOtp} inputpOtp={inputpOtp} otp={otp}/></div>}
    </div>


  )
}

export default Main
