import Image from 'next/image'
import React, { useState } from 'react'

const Nft = ({ nft }) => {
    const [showButton, setShowButton] = useState(false)
    return (
        <div className='h-fit bg-transparent p-2 border-2 border-slate-600 w-11/12 m-auto rounded-lg flex flex-col'>
            <div onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)} className='mb-4 rounded relative'>
                {showButton && <div className='w-full absolute bottom-2 flex items-center justify-center'><button className='bottom-2 rounded px-4 bg-white py-2 cursor-pointer text-black'>Set as Profile Picture</button></div>}
                <Image src={nft.image} width={400} height={500} className='object-cover rounded h-96' />
            </div>
            <span className='text-slate-600 text-white/60'>{nft.name}</span>
            <span className=' text-white'>{nft.id}</span>
        </div>
    )
}

export default Nft