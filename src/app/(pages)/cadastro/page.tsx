import React from "react";
import Header from "@/app/components/header";
import LinkButton from "@/app/components/loginbutton";

function cadastro(){
    return(
        
        <div className=" h-screen w-screen">
        <Header></Header>

        <div className="h-[85vh] w-screen bg-gray-900 flex justify-center items-center">

        <div className="h-[70vh] w-[60vw] bg-white flex justify-center items-center flex-col gap-5 rounded-lg">
          <h1 className="font-bold text-purple-900">Faça seu Cadastro</h1>

            <input className=" border border-solid border-black rounded-lg" placeholder="  Crie o seu usuario"></input>
            <input className=" border border-solid border-black rounded-lg" placeholder="  Digite seu email"></input>
            <input className=" border border-solid border-black rounded-lg" placeholder="  Digite o email novamente"></input>
            <input className=" border border-solid border-black rounded-lg" placeholder="  Crie a sua senha"></input>
            <input className=" border border-solid border-black rounded-lg" placeholder="  Digite a senha novamente"></input>
          

          <LinkButton name={"Cadastrar"} rota={"/"}></LinkButton>
          

        </div>
        </div>
        


    </div>
    )


}

export default cadastro;