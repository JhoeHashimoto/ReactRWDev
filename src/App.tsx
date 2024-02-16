// @ts-check *****LINKANDO O arquivo com o CSS para extilização externa********
import './App.css';

function App(){

    const paragrafo = {
        color: 'darkred',
        fontSize: '2em',
        margin: '50px'
    }
    return(
    <>
    <h1>Olá Mundo</h1>
    <h2 style={{fontSize: '4em', color:'darkgreen'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cupiditate.</h2>
    
    <p style={paragrafo}>Lorem, ipsum dolor.</p>

    
    </>
    )
}

export default App;