import React,{useState} from 'react';
import ListaTarefas from './componentes/ListaTarefas';
import AdicionarTarefa from './componentes/Tarefas/AdicionarTarefa/AdicionarTarefa';
import Cofrinho from './componentes/cofrinho';
import Exemplo01 from './componentes/Exemplos/Exemplo01';
import './App.css';

const App: React.FC = () =>{
  const[tarefas,setTarefas] = useState<string[]>([]);
  const adicionarTarefa = (novaTarefa:string) =>{
    setTarefas([...tarefas, novaTarefa]);
  };
  return (
    <>
       <h1>LISTA DE TAREFAS </h1>
       <ListaTarefas tarefas= {tarefas} />
       <AdicionarTarefa onAdicionar= {adicionarTarefa}  />
       <Cofrinho></Cofrinho>
       <br></br>
       <Exemplo01></Exemplo01>
    </>
  )
}
export default App;
