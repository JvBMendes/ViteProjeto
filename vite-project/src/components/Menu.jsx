import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className={style.wrapMenu}>
            <p>
                <a href={'/'}>Início</a>
            </p>
            <p>
                <a href={'/Calculadora'}>Calculadora</a>
            </p> 
            <p>
                <a href={'/Contato'}>Contato</a>
            </p>
            
            <p>
                <a href={'/Tecnologias'}>Tecnologias</a>
            </p>
        </div>
    )
}