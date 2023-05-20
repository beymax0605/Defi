import { useRouter } from 'next/router'
import React from 'react'

const StepThree = ({ signupData, setSignupData, step, setStep }) => {


    const uses = [
        {
            value: "trading",
            heading: "Trading",
            text: "This layout is designed for users who are interested in trading cryptocurrencies."
        },
        {
            value: "nfts",
            heading: "NFTs",
            text: "This layout is focused on non-fungible tokens (NFTs), It feature tools to help users find, buy, and manage NFTs."
        },
        {
            value: "explore",
            heading: "Explore",
            text: "This layout is designed for users who are primarily interested in staying up to date with the latest updates on the XRPL ledger."
        },
    ]
    const router = useRouter()
    return (
        <div className='flex flex-col items-center justify-start'>
            <span className='text-2xl font-semibold my-3'>How will you use XRPL Dash ?</span>
            <span className='my-2 w-full text-slate-400'>
                We will streamline your setup experience accordingly
            </span>
            {
                uses.map((use, index) => (
                    <div onClick={() => { setSignupData({ ...signupData, use: use.value }); router.push("/") }} key={index} className='my-1 min-h-28 p-3 rounded-2xl hover:bg-slate-500/40 curs bg-inherit cursor-pointer border-2 border-slate-600 flex flex-col'>
                        <span className='font-semibold mb-2 text-white'>{use.heading}</span>
                        <span className='text-white/60'>{use.text}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default StepThree