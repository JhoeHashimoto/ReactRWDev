// @ts-check *****LINKANDO O arquivo com o CSS para extilização externa********
import './App.css';
import ComponenteTeste02 from './ComponenteTeste02';
import ComponenteTeste03 from './ComponenteTeste03';

function App(){

    const paragrafo = {
        color: 'darkred',
        fontSize: '2em',
        margin: '50px'
    }
    return(
    <>
    <ComponenteTeste03></ComponenteTeste03>
    <ComponenteTeste02></ComponenteTeste02>
    <h1>Olá Mundo</h1>
    <h2 style={{fontSize: '4em', color:'darkgreen'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cupiditate.</h2>
    
    <p style={paragrafo}>Lorem, ipsum dolor.</p>
    <p className='exemplo'>Lorem ipsum dolor sit.</p>

    </>
    )
}

export default App;