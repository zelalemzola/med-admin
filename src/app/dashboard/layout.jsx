import React from 'react'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'
import '../globals.css'
import "@uploadthing/react/styles.css";
import localFont from "next/font/local";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Medical Professional's Admin Dashboard",
  description: "Medical dashboard for Medical professionals",
};

const layout = ({children}) => {
  return (
    <div className='w-full '>
    <Navbar/>
    <div className='flex pt-[53px] z-0 '>
        <div className='w-1/6 fixed h-screen border-r border-r-primary '><Sidebar/></div>
        <div className='pl-[17%]'>{children}</div>
    </div>
    </div>
  );
}

export default layout