import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.jpg"

function Header(){

    return(
        <div className=" h-[15vh] w-screen bg-blue-950 flex items-center justify-center gap-12">

        <Image src={logo} className="w-[15vh] h-[15vh]" alt={""}></Image>
        <div className="h-[25px] w-[110px] bg-yellow-400 flex justify-center">
            <h1 className=" text-purple-900 font-sans font-bold )">WaveConnect</h1>
        </div>
        
        </div>
    )
}

export default Header