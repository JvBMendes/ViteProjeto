import { useState } from 'react';


import Menu from './components/Menu';
import style from "./Contato.module.css"


export const Contato = () => {


    const defaultPhoneNumber = '5541998539758'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleWhatsAppMessage = () => {
        const {name, email, message} = formData;
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}`;

        window.open(whatsappUrl, '_blank');
    }

    return(
        <div className={style['wrap-all-contact']}>
            <Menu/>
            <h1 className={style.wrapH1}>Contato</h1>
            <br />
            <div className={style.wrapTwoDivs}>
               
                <div>
                    <h2>Zap</h2>
                    <div className={style.inputsDiv}>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="name" className={style.labels}>Nome:</label>
                            <input className={style.InputS1} type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="email" className={style.labels}>Email:</label>
                            <input className={style.InputS1} type="email" id='email' name='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className={style.wrapLabelInput}>
                            <label htmlFor="message" className={style.labels}>Mensagem:</label>
                            <textarea className={style.textareaS1} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button className={style.btnTec} onClick={handleWhatsAppMessage}>Enviar mensagem</button>
                    </div>
                </div>
            </div>
        </div>
    )
}