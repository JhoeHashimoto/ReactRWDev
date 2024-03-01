import React from 'react';
import './Tarefas.css';
/*importando a biblioteca react

/*variavel recebendo propriedades e vvalores tipados */

interface TarefaProps {
    texto: string;

}
/*propriedade Function Componentes, atribuindo parametros da interface*/
const Tarefas: React.FC<TarefaProps> = ({texto}) =>{
    return(

/*retornando uma lista que popula atraves dos atributos*/
        <>
        <li>{texto}</li>
        </>
    )
};
export default Tarefas;