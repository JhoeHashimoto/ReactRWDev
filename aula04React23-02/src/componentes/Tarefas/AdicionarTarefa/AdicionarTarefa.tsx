import React,{useState} from 'react';
import './AdicionarTarefa.css'
/*propriendade  useState armazena a variável  */
//importa o useState do react, é um hook do react utilizando para adicionar o estado da memória no servidor antes de adicionar no banco de dados
//useState "mantem os itens no carrinho do marketplace" ao adicionar outro item 

interface AdicionarTarefaProps{
    onAdicionar:(novaTarefa:string) => void;
    //verifica se tem algum argumento, caso não retorna vazio
}

const AdicionarTarefa: React.FC<AdicionarTarefaProps> = ({onAdicionar}) =>{
    const [novaTarefa, setNovaTarefa] = useState<string>('');
    const handleAdicionar = () => {
        if(novaTarefa.trim() !== ''){
            onAdicionar(novaTarefa);
            setNovaTarefa('');
        }
    };
    return(
        <>
        <div className = "ola">
            <input type="text" value={novaTarefa} onChange={(e)=> 
                setNovaTarefa(e.target.value)} />
            <button onClick={handleAdicionar}>Adicionar Tarefa</button>
        </div>
        </>
    );

 };
export default AdicionarTarefa;

