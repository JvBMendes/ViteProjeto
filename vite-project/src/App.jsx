
import Menu from './components/Menu'
import style from './App.module.css'

function App() {
    return(   
        <div>
            <Menu/>
            <div className={style.divInicio}>
                <h1>Bem vindo</h1>
            </div>
        </div>
      )
}

export default App
