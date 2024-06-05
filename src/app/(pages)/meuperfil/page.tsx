import React from "react";
import Header from "@/app/components/header";
import LinkButton from "@/app/components/loginbutton";
import usuario from "../../../../public/usuario.png"
import Image from "next/image";
import post from "../../../../public/familia.png"
import like from "../../../../public/gostar.png"
import comment from "../../../../public/comente.png"
import repost from "../../../../public/repost.png"


function perfil(){
    return(<div className=" h-screen w-screen">

    <Header></Header>
    
    <div className="bg-sky-950 w-screen h-[85vh] flex flex-col justify-start items-center gap-4">
        <div className=" bg-yellow-400 w-screen h-[7vh] flex justify-center items-center gap-2">
            <input className=" w-[25vh] rounded-[15px]" placeholder="  Busca"></input>
            <LinkButton name={'Sair'} rota={'/'}></LinkButton>
            <LinkButton name={'Feed'} rota={'feed'}></LinkButton>
            <LinkButton name={'Notificações'} rota={'notificacoes'}></LinkButton>
        </div>
        <div className=" bg-white w-[80vw] h-[80vh] flex flex-col justify-start items-center rounded-lg">
            <div className=" bg-white w-[50vh] h-[10vh] flex flex-row justify-center items-center gap-3 m-2">
                <Image src={usuario} alt={""} className="w-[10vh] h-[10vh] rounded-full"></Image>
                <h1 className=" text-2xl font-bold">usuario001</h1>

            </div>
            <div className=" bg-white w-[50vh] h-[10vh] flex flex-row justify-center items-center gap-3">
                <h1 className=" text-sm">Seguidores: 1</h1>
                <h2 className=" text-sm">Seguindo: 1</h2>
                <h3 className=" text-sm">Publicações: 1</h3>
            </div>

            <div className=" bg-white w-[40vh] h-[7vh] mt-2 flex flex-row justify-start gap-3 items-center">
                <Image src={usuario} className="w-[5vh] h-[5vh] ml-2 rounded-full" alt={""}></Image>
                <h1 className=" font-bold">usuario001</h1>
            
            </div>
            <Image src={post} className="w-[40vh] h-[27vh]" alt={""}></Image>
        
            
            <div className=" bg-white -400 w-[40vh] h-[5vh] m-1 flex gap-2 items-center justify-end ">
                <button> <Image src={like} alt={""} className=" w-[3vh] h-[3vh]"></Image></button>
                <button> <Image src={comment} alt={""} className=" w-[5vh] h-[5vh]"></Image></button>
                <button> <Image src={repost} alt={""} className=" w-[3vh] h-[3vh]"></Image></button>
            </div>
            <div className=" bg-white w-[40vh] h-[3vh] flex items-center justify-start ">
                <p className="text-sm">Uma tarde em familia!</p>
        
            </div>
            <div className=" bg-white w-[40vh] h-[3vh] m-1 flex gap-2 items-center justify-start ">
                <p className="text-sm">usuario002: Lindos!</p>
        
            </div>





        </div>
    </div>
    
    </div>)
    
}

export default perfil