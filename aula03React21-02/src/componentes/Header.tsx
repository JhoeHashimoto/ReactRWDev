import viteLogo from '/vite.svg'
function Header(){

const header1 = {
            textAlign:'center',
            color: 'black',
            fontSize: '60px',
}
    return(
        <>

        <h2 style={header1}>HEADER</h2>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <p style={{textAlign:'center'}}>Cabeçalho teste da aula</p>
        <hr/>
    

        </>

    )
}

export default Header;