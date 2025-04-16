import React, { useEffect } from 'react'

const InputField = ({propRef,setInputpOtp,inputpOtp,otp}) => {
  useEffect(() => {
    if (propRef.current) {
      propRef.current.focus();
    }
  }, [propRef]); // Run this effect after the component mounts and propRef is available
  return (
    <div className='inputFieldCont'>
     Enter the OTP 
     <input className='inputField' type="text"  value={inputpOtp} ref={propRef} onChange={(e)=>{

        if ((!isNaN(e.target.value)) && (e.target.value.length<=5)) 
      { 
         setInputpOtp(e.target.value);
        }  
     }}/>
      
     <div>
     <button className="submitBtn" disabled={inputpOtp.length<5} onClick={()=>{inputpOtp===otp?alert("Success"):alert("Failed")}}>SUBMIT</button>
     </div>
    </div>
  )
}

export default InputField
