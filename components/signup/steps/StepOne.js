import React from 'react'
import { RiCamera2Line } from "react-icons/ri";

const StepOne = ({ signupData, setSignupData, step, setStep }) => {

    const updateAvatar = async () => {
        const element = document.querySelector("#updateAvatarID")
        const reader = new FileReader()
        const file = element.files && element.files[0]
        if (!file) return alert("Oops you image failed to upload try again!")
        reader.addEventListener('loadend', async () => {
            setSignupData({ ...signupData, avatar: reader.result })
        })
        reader.readAsDataURL(file)
    }
    return (
        <div className='w-full flex flex-col items-center'>
            <span className='text-2xl font-semibold my-3 text-white'>Welcome! First things first...</span>
            <span className='mt-3 w-11/12 text-[#FFFFFF]/60'>
                Get started with the XRPL Dash in seconds by following these simple steps to set up your account.
            </span>
            <div className='rounded-full w-36 h-36 border-2 border-slate-500 p-1 my-6'>
                <div className='w-full h-full'>
                    <input type="file" id="updateAvatarID" accept="image/*" onChange={updateAvatar} className="hidden" />
                    <label htmlFor='updateAvatarID' title='Update Avatar' className='relative cursor-pointer w-full h-full'>
                        <div onMouseEnter={() => {
                            const elt = document.querySelector(".camera")
                            elt?.classList.replace("hidden", "flex")
                        }}
                            onMouseLeave={() => {
                                const elt = document.querySelector(".camera")
                                elt?.classList.replace("flex", "hidden")
                            }}
                            className={`w-full h-full flex items-center justify-center  hover:bg-black/60 absolute rounded-full`}>
                            <RiCamera2Line className='camera hidden text-white text-2xl' />
                        </div>
                        <img src={signupData.avatar ? signupData.avatar : "https://picsum.photos/500/500"} className="w-full max-h-full rounded-full object-cover avatar" loading='lazy' alt="" />
                    </label>
                </div>
            </div>
            <div className='flex flex-col w-full items-start justify-start my-6'>
                <span className='flex justify-center items-end'>
                    <span className='font-bold text-lg text-white'>Display Name</span> &nbsp;
                    <span className='text-sm text-slate-500 mb-1 text-white/60'>(required)</span>
                </span>
                <div className='rounded-2xl p-3 py-4 w-full bg-[#A6B0CF]/5 mt-3 flex items-center justify-start'>
                    <span className=''>@</span>
                    <input
                        onKeyDown={(e) => {
                            if (!signupData.username) return
                            if (e.code === "Enter") {
                                setStep(step + 1)
                                console.log("Enter key pressed!");
                            }
                        }} type={"text"} value={signupData.username} onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} placeholder='username123' className='placeholder:text-white/60 ml-2 bg-transparent w-full pl-2 focus:outline-none' />
                </div>
            </div>
        </div>
    )
}

export default StepOne