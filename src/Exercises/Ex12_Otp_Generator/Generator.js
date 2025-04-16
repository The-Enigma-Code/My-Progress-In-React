import React, { useEffect } from 'react'

const Generator = ({ otp, setOtp, setShowGeneratedOtp, propRef }) => {

    const generateOtp = () => {
        const generatedOtp = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)).join('');
        setOtp(generatedOtp);
    }
    useEffect(() => {
        if (otp) {
            setShowGeneratedOtp(true);
        }
    }, [otp, propRef, setShowGeneratedOtp])
    return (
        <div>
            <button className='generatorBtn' onClick={generateOtp}>Generate Otp</button>
        </div>
    )
}

export default Generator
