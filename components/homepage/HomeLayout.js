import Head from 'next/head';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const HomeLayout = ({ children }) => {

    const posts = [
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
        {
            heading: "Ethereum has made an epic rise of 0.81!",
            description: "After a long time when ethereum has really gone down, it is back again with a boom! Buy it and get ready for your account growing bigger and bigger!!!"
        },
    ]

    return (
        <div className="flex flex-col items-center min-h-screen px-[25px]">
            {/* {children} */}
            <Head>
                <title>Home | XRPL</title>
            </Head>
            <div className='flex items-start justify-around h-full w-full mt-6'>
                <div className='w-3/12 mr-2 hidden sm:flex  rounded-xl min-h-screen flex-col'>
                    <div className='bg-slate-600 h-44 rounded-2xl mb-2 p-4'>
                        <div className='w-full flex items-center justify-between'>
                            <span className='text-lg text-white'>Welcome</span>
                            <BiDotsVerticalRounded className='text-white cursor-pointer hover:bg-slate-500 p-[2px] rounded-full' size={25} />
                        </div>
                    </div>
                    <div className='bg-[#21212A] rounded-2xl w-full my-2 h-[40vh]'></div>
                    <div className='bg-[#21212A] rounded-2xl w-full my-2 h-[40vh]'></div>
                </div>
                <div className='w-full sm:w-9/12 mlg:w-6/12 mlg:mx-2 lg:mx-6 flex bg-[#21212A] p-4 rounded-xl min-h-screen flex-col'>
                    <div className='w-full flex items-center justify-between'>
                        <span className='font-semibold text-xl'>Feed</span>
                        <BiDotsVerticalRounded className='cursor-pointer hover:bg-slate-500 p-[2px] rounded-full' size={25} />
                    </div>
                    <div className='flex flex-col mt-3 items-center'>
                        {
                            posts.map((posts, index) => (
                                <div key={index} className='flex p-3 cursor-pointer hover:bg-slate-500/30 items-center justify-start my-2 rounded-xl bg-[#A6B0CF]/5'>
                                    <div className='w-16 h-16 rounded-full bg-[#A6B0CF]/5'>
                                        <img src={`https://picsum.photos/${Math.ceil(Math.random() * (900 - 500) + 500)}/${Math.ceil(Math.random() * (900 - 500) + 500)}`} className='w-full h-full rounded-full' />
                                    </div>
                                    <div className='ml-4 w-10/12 flex flex-col'>
                                        <span className='font-bold mb-2 text-white'>{posts.heading}</span>
                                        <span className='text-sm text-[#A6B0CF]'>{posts.description}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-3/12 ml-2 hidden mlg:flex rounded-xl min-h-screen flex-col'>
                    <div className='bg-[#21212A] rounded-2xl w-full my-2 h-[50vh]'></div>
                    <div className='bg-[#21212A] rounded-2xl w-full my-2 h-[40vh]'></div>
                    <div className='bg-[#21212A] rounded-2xl w-full my-2 h-[40vh]'></div>
                </div>
            </div>

        </div >
    );
}

export default HomeLayout;
