import React from "react";

import Link from "next/link";

function LinkButton({name, rota}: any){
    return(
        <Link href={rota}>
            <button className=" text-purple-900 font-bold bg-yellow-400 h-[5vh] w-[10vw]></button> rounded-lg mr-3 ml-3">{name}</button>

        </Link>
    );

}
export default LinkButton



