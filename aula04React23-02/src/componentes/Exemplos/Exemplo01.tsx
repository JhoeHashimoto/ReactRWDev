import { useState } from "react";
import './Exemplo01.css';
function Exemplo01(){
    const[aluno,setAluno] = useState<string>("");
    return(
        <>
            <hr></hr>
            <h1>EXEMPLO 01</h1>
            <div className="aluninho">
            <p>
                <b>Aluno:</b> {aluno}

            </p>
            <button onClick={()=> setAluno("JOÃOZINHO")}>CLIQUE AQUI</button>
            </div>
        </>
    )
}

export default Exemplo01;