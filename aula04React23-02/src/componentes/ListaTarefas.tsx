import React from 'react';
import Tarefas from './Tarefas/Tarefas';
//importando os componentes



//definindo as interfaces, propriedade tarefas do tipo Array
interface ListaTarefasProps{
    tarefas: string[];
}

//Define uma constante chamada ListaTarefas que é um funcional Component react
//Ele espera receber propriedades do tipo ListaTarefasProps
//e a desestruturação do objeto de propriedade é feita para obter a propriedade tarefas
const ListaTarefas: React.FC<ListaTarefasProps> = ({tarefas}) => {
    return(
        <ul>
            <hr></hr>
            {tarefas.map((tarefa,index)=> (
                <Tarefas key={index} texto={tarefa} />
                    /* .map mapeia para iterar o array tarefas e atribui um indice*/
                    //cria um componente tarefa, passar a propriedade key indice de iteração e vai passar
                    //a propriedade de texto como valor de tarefa
            ))}
        </ul>
    )
}
export default ListaTarefas;