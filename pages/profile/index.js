import ProfileNavbar from '@/components/navbar/ProfileNavbar';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { BsDiscord, BsTelegram, BsTwitter } from 'react-icons/bs';
import images from '../../public';
import Nft from './Nft';

const index = () => {

  const [viewSocials, setViewSocials] = useState(false)
  const nfts = [
    {

      image: images.NFT1,
      name: "The Houndies",
      id: "#Houndie #5433"
    },
    {

      image: images.NFT2,
      name: "The Houndies",
      id: "#Houndie #5433"
    },
    {

      image: images.NFT3,
      name: "The Houndies",
      id: "#Houndie #5433"
    },
    {

      image: images.NFT4,
      name: "The Houndies",
      id: "#Houndie #5433"
    },
  ]
  return (
    <div>
      <Head>
        <title>Profile | XRPL</title>
      </Head>
      <ProfileNavbar />
      <div className='flex flex-col px-[3vw]'>
        <div className='w-full rounded-xl h-[35vh] relative bg-[#21212A]'>
          <div className='absolute -bottom-[8vh] left-10'>
            <Image width={200} height={200} src={images.VectorDog} />
          </div>
          {viewSocials && (<div className='bg-[#A6B0CF]/5 rounded p-3 absolute right-10 bottom-20 flex items-center justify-center w-fit'>
            <BsDiscord size={25} className="mx-2 text-white" />
            <BsTwitter size={25} className="mx-2 text-white" />
            <BsTelegram size={25} className="mx-2 text-white" />
          </div>)}
          <div onClick={() => setViewSocials(!viewSocials)} className='absolute bottom-10 right-10'>
            <Image width={40} height={40} src={images.VectorDog} />
          </div>
        </div>
        <div className='w-full flex items-start mt-[10vh] justify-between'>
          <div className='flex flex-col '>
            <span className='flex items-center my-2'>@username <button className='ml-2 cursor-pointer text-white px-4 rounded py-1 bg-[#21212A]'>Edit profile</button></span>
            <span className='my-2 text-slate-400'>raF6hJv89TI3k2DnvZ13F</span>
          </div>
          <div className='flex items-center'>
            {
              [images.Badge1, images.Badge2, images.Badge3, images.Badge4, images.Badge5, images.Badge6].map((image, index) => (
                <div className='mx-3'>
                  <Image src={image} key={index} alt={index} />
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <span className='my-4 text-white'>My NFTs</span>
          <div className='w-full grid grid-cols-4'>
            {
              nfts.map((nft, index) => {
                return (
                  <Nft key={index} nft={nft} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default index