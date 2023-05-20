import { useState } from 'react';
import StepOne from './steps/StepOne';
import StepThree from './steps/StepThree';
import StepTwo from './steps/StepTwo';

const SignupComponent = ({ setShowSignup, showSignup }) => {
  const [step, setStep] = useState(1)
  const [signupData, setSignupData] = useState({
    username: "",
    use: "",
    avatar: "",
    content: [""]
  })

  return (
    <div className='fixed z-10 bg-black/10 backdrop-blur-md flex items-center justify-center w-screen h-screen'>
      <div className='absolute w-full h-full z-20' onClick={() => setShowSignup(!showSignup)}></div>
      <div className='bg-[#1A1921] w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 min-h-[65vh] flex items-center justify-between flex-col z-30 p-10 rounded-xl border-2 border-slate-700'>
        {step === 1 && (<StepOne signupData={signupData} setSignupData={setSignupData} step={step} setStep={setStep} />)}
        {step === 2 && (<StepTwo signupData={signupData} setSignupData={setSignupData} step={step} setStep={setStep} />)}
        {step === 3 && (<StepThree signupData={signupData} setSignupData={setSignupData} step={step} setStep={setStep} />)}
        <div className='flex items-center justify-center'>
          {
            [1, 2, 3].map((currentStep, index) => (
              <div onClick={() => setStep(currentStep)} key={index} className={`mx-2.5 rounded-full w-[14px] h-[14px] ${step === currentStep ? "bg-white border-slate-700 border" : "bg-slate-700"}`}></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SignupComponent