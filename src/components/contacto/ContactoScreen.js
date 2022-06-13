import React from 'react'
import Swal from 'sweetalert2';
import * as EmailValidator from 'email-validator';
import emailjs from 'emailjs-com';

const serviceID = 'service_igz71gv';
const templateId = 'template_q7gii1s';
const publickKey = 'ATtgiaRnDzuGekbIw';


export const ContactoScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let err = false;

        //Referncias al formulario
        const formulario = document.getElementById('formulario');

        let datos = new FormData(formulario);
        const data = {
            nombre: datos.get('Name'),
            email: datos.get('Email'),
            asunto: datos.get('Asunto'),
            msg: datos.get('Message')
        }

        const emailValido = EmailValidator.validate(data.email);
        
        if(data.nombre === '' || data.email === '' || data.asunto === '' || data.msg === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Rellena todos los campos correctamente',
            })
            err = true;
            return err;
        }

        if(!emailValido){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa un email valido',
            })
            err = true;
            return err;
        }

        const templateParams = {
            asunto: data.asunto,
            name: data.nombre,
            email: data.email,
            msg: data.msg
        }

        if(!err){
            emailjs.send(serviceID, templateId, templateParams ,publickKey)
                .then((res => {
                    console.log('Succes', res.status, res.text);
                    if(res.status == 200){
                        Swal.fire({
                            icon: 'success',
                            text: 'Correo enviado correctamente',
                        })
                    }
                }))
        }
    }


  return (
    <>
        <div className='vg-page page-contact' id='contacto'>
            <br/><br/>
            <div className='container-fluid'>
                <div className='text-center wow fadeInUp'>
                    <div className='badge badge-subhead'>Contacto</div>
                </div>
                <h1 className='text-center fw-normal wow fadeInUp'>Ponerse en contacto</h1>
                <div className='col-lg-12'>
                    <form className='vg-contact-form' id='formulario'>
                        <div className='form-row'>
                            <div className='col-12 mt-3 wow fadeInUp'>
                                <input className='form-control' type='text' name='Name' placeholder='Ingresa tu nombre' required/>
                            </div>
                            <div className='col-6 mt-3 wow fadeInUp'>
                                <input className='form-control' type='email' name='Email' placeholder='Ingresa tu email'/>
                            </div>
                            <div className='col-6 mt-3 wow fadeInUp'>
                                <input className='form-control' type='text' name='Asunto' placeholder='Asunto'/>
                            </div>
                            <div className='col-12 mt-3 wow fadeInUp'>
                                <textarea className='form-control' name='Message' rows='6' placeholder='Ingresa el mensaje aqui...' />
                            </div>
                            <button onClick={handleSubmit}  type='submit' className='btn btn-theme mt-3 wow fadeInUp ml-1'>Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
