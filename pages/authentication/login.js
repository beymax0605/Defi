import React, { useEffect, useState } from "react";
import images from '../../public';
import Image from 'next/image';
import Head from "next/head";
import SignupComponent from "@/components/signup/SignupComponent";


const Login = () => {
  const [showSignup, setShowSignup] = useState(false)
  return (
    <>
      <Head>
        <title>Login | XRPL</title>
      </Head>
      {
        showSignup && <SignupComponent setShowSignup={setShowSignup} showSignup={showSignup} />
      }
      <div className="flex flex-col flex-1 grow bg-[#1A1921] h-full  justify-center items-center">
        <div className="flex flex-row w-11/12 lg:w-2/3 h-2/3 mx-auto justify-end relative ">
          <Image src={images.Dog} alt=" jacket" className="h-full object-cover rounded-[22px] absolute w-full" />
          <div className="h-auto right-0 z-[2]  bg-[#21212A] w-full sm:w-9/12 md:w-7/12 lg:w-6/12 rounded-tr-[22px] rounded-br-[22px] px-4" >
            <div className="flex flex-col px-1 md:px-6 pb-[21px]" >
              <Image src={images.Logo} className="mt-[30px] w-36 h-9 mb-[33px]" />
              <p className="font-mont text-white text-[40px] mb-[11px]">Connect Wallet</p>
              <p className="mb-[20px] text-[#FFFFFF] opacity-70 leading-6 text-[20px]">Connect your wallet to XRPL Dash quickly and easily by scanning the QR code with your XUMM app.</p>
              <Image src={images.Qr} className="mb-[76px] w-[337px] h-[337px]" />
              <p className="text-[#FFFFFF] opacity-60 leading-6 text-[20px] font-mont">Don't have the XUMM app installed? <strong onClick={() => setShowSignup(!showSignup)} className="cursor-pointer hover:underline">Click here.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;