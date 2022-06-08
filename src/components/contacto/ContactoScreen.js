import React from 'react'

export const ContactoScreen = () => {
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
                    <form className='vg-contact-form'>
                        <div className='form-row'>
                            <div className='col-12 mt-3 wow fadeInUp'>
                                <input className='form-control' type='text' name='Name' placeholder='Ingresa tu nombre'/>
                            </div>
                            <div className='col-6 mt-3 wow fadeInUp'>
                                <input className='form-control' type='text' name='Email' placeholder='Ingresa tu email'/>
                            </div>
                            <div className='col-6 mt-3 wow fadeInUp'>
                                <input className='form-control' type='text' name='Asunto' placeholder='Asunto'/>
                            </div>
                            <div className='col-12 mt-3 wow fadeInUp'>
                                <textarea className='form-control' name='Message' rows='6' placeholder='Ingresa el mensaje aqui...' />
                            </div>
                            <button type='submit' className='btn btn-theme mt-3 wow fadeInUp ml-1'>Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
