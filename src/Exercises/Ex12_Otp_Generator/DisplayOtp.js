import React, { useContext } from 'react'
import { OtpContext } from './OtpContextProv'

const DisplayOtp = () => {
const  {otp} =useContext(OtpContext)
  return (
    <div className='generatedOtp'>
     <span style={{color:'black'}}>OTP :</span> <span>{otp}</span>
    </div>
  )
}

export default DisplayOtp
