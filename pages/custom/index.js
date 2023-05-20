import Head from 'next/head'
import React from 'react'

const index = () => {

    return (
        <div className="w-full mt-4 px-4 flex min-h-[70vh] items-center justify-between h-full">
            <Head>
                <title>Custom | XRPL</title>
            </Head>
            <div className='w-[48%] mx-2 min-h-[75vh] rounded-lg border-dashed border-2 border-slate-600 flex flex-col'>

            </div>
            <div className='w-[48%] mx-2 min-h-[75vh] rounded-lg border-dashed border-2 border-slate-600 flex flex-col'>

            </div>
        </div>
    )
}

export default index