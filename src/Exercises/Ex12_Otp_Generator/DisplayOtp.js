import React from 'react'

const DisplayOtp = ({otp}) => {
  return (
    <div className='generatedOtp'>
     <span style={{color:'black'}}>OTP :</span> <span>{otp}</span>
    </div>
  )
}

export default DisplayOtp
