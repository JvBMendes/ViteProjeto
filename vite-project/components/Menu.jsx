import style from './Menu.module.css'

export default function Menu() {
    return(
        <div className={style.wrapMenu}>
            <p>
                <a href={'/'}>Início</a>
            </p>
            <p>
                <a href={'/contato'}>Contato</a>
            </p>
        </div>
    )
}