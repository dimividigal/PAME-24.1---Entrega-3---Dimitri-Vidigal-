import Header from "@/app/components/header";
import LinkButton from "@/app/components/loginbutton";
import usuario from "../../../../public/usuario.png"
import Image from "next/image";

function notificacoes(){

return(
    <div>
        <Header></Header>
        <div className="bg-sky-950 w-screen h-[85vh] flex flex-col justify-start items-center gap-4">

            <div className=" bg-yellow-400 w-screen h-[7vh] flex justify-center items-center">
                <input className="w-[25vh] rounded-[15px]" placeholder="  Busca"></input>
                <LinkButton name={'Sair'} rota={'/'}></LinkButton>
                <LinkButton name={'Meu Perfil'} rota={'meuperfil'}></LinkButton>
                <LinkButton name={'Feed'} rota={'feed'}></LinkButton>
            </div>

                <div className=" bg-white w-[80vw] h-[80vh] flex flex-col justify-start items-center rounded-lg">
                    <div className=" w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2">
                        <h1 className=" text-3xl font-bold">Notificações</h1>
                    </div>
                    <div className=" w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2 gap-2">
                        <Image src={usuario} className="w-[3vh] h-[3vh] rounded-full" alt={""}></Image>
                        <h1>usuario002 pediu para te seguir (Aceito há 1d)</h1>
                    </div>


                    <div className=" w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2 gap-2">
                        <Image src={usuario} className="w-[3vh] h-[3vh] rounded-full" alt={""}></Image>
                        <h1>usuario002 começou a te seguir! (há 1d)</h1>
                    </div>
                    <div className="  w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2 gap-2">
                        <Image src={usuario} className="w-[3vh] h-[3vh] rounded-full" alt={""}></Image>
                        <h1>usuario002 comentou: Lindos! (há 3h)</h1>
                    </div>
                    <div className="  w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2 gap-2">
                        <Image src={usuario} className="w-[3vh] h-[3vh] rounded-full" alt={""}></Image>
                        <h1>usuario002 curtiu a sua foto (há 3h)</h1>
                    </div>
                    <div className="  w-[70vh] h-[5vh] flex flex-row justify-center items-center m-2 gap-2">
                        <Image src={usuario} className="w-[3vh] h-[3vh] rounded-full" alt={""}></Image>
                        <h1>usuario003 pediu para te seguir (há 30m)</h1>
                        
                    </div>
                    <div>
                        <button className="m-1 bg-yellow-400 font-bold rounded-lg text-purple-900">Aceitar</button>
                        <button className="m-1 bg-yellow-400 font-bold rounded-lg text-purple-900">Recusar</button>
                    </div>
                    

                
                </div>

        </div>
    </div>



);



}

export default notificacoes