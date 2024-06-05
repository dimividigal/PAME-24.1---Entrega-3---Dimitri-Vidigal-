import Image from "next/image";
import logo from "../../public/logo.jpg";
import Header from "./components/header";
import LinkButton from "./components/loginbutton";

export default function login() {
  return(
    <div className=" h-screen w-screen">
      <Header></Header>

      <div className="h-[85vh] w-screen bg-gray-900 flex justify-center items-center">

        <div className="h-[70vh] w-[60vw] bg-white flex justify-center items-center flex-col gap-5 rounded-lg">
          
          <h2 className="font-bold">Faça o seu Login!</h2>

          <input className=" border border-solid border-black rounded-lg" placeholder="  Digite o seu usuario"></input>

          <input className=" border border-solid border-black rounded-lg" placeholder="  Digite a sua senha"></input>

          <LinkButton name={"Entrar"} rota={"feed"}></LinkButton>

          <h3 className="font-bold">Ainda não esta cadastrado?</h3>
          <LinkButton name={"Cadastre-se!"} rota={"cadastro"}></LinkButton>
          

        </div>


      </div>

    </div>
  );
}
