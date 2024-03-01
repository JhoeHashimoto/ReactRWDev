import {useState,useEffect} from "react";
import './Exemplo02Effect.css';

//bibliotecas do react são componentezadas
//logo para acessar um componente da biblioteca react [é preciso abrir chaves e falar o componente]

const Exemplo02Effect =() =>{

    //estado inicial vazio
    const [usuarios,setUsuarios] = useState([]);

    //iniciando o loading com o tipo false (bool)
    const [loading, setLoading] = useState(false);


    //utilizando uma função assincrona para buscar os dados de usuarios
    useEffect(()=>{
        const fetchData =  async () =>{

            //se for verdadeiro executa o loading (loading == true)
            if (loading){
                try{
                    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                    const data = await response.json();
                    //Atualizando o estado do usuario(dados da api)
                    setUsuarios(data);
                }
                catch(error){
                    console.error('erro ao buscar dados de api: ',error);
                }
                finally{
                    setLoading(false);
                }
            }
        };
        //chamando a função de busca de usuário
        fetchData();
    }, [loading]);
    const recarregarDados = () =>{
        setLoading(true);
    }
    return(
        <>
            <h1>EXEMPLO DE CARREGAR API</h1>
            {loading ?(
                <p>CARREGANDO...</p>
            ):(
                <div className="aoba">
                    <ul>{usuarios.map((usuario) =>(
                        <li key={usuario.id}> {usuario.name} - {usuario.email}</li>))}
                    </ul>
                    <button onClick={recarregarDados}>CARREGAR DADOS:</button>
                </div>
            )}
        </>                 
    )
}    
export default Exemplo02Effect;



   