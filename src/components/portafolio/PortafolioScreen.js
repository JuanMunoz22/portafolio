import React from 'react'

export const PortafolioScreen = () => {
    const certificadorBlockchain = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654645188/Portafolio/Works/Certificador-blockchain_woiplw.png';

    const handleClick = () => {
        window.open('https://certificador.herokuapp.com/')
    }
  return (
    <>
        <div className='vg-page page-portfolio' id="proyectos">
        <br/><br/>
            <div className='container'>
                <div className='text-center wow fadeInUp'>
                    <div className='badge badge-subhead'>Proyectos</div>
                </div>
                <h1 className='text-center fw-normal wow fadeInUp'>Ver mis trabajos</h1>

                <div className='gridder my-3'>
                    <div className='grid-item apps wow zoomIn'>
                        <div className='img-place' data-src={certificadorBlockchain} data-fancybox>
                            <img src={certificadorBlockchain} alt=''/>
                            <div className='img-caption'>
                                <h5 className='fg-theme'>Certificador Blockchain</h5>
                                <p>
                                    Proyecto de título
                                </p>
                            </div>
                        </div>
                        <div className='description'>
                            <br/>
                            <p>
                                Este proyecto consiste en proteger y verificar documentos a través de hash asociados a cada documento. 
                                Para el desarrollo de este proyecto se creo una API REST en el backend utilizando nodeJs en conjunto con express, y para el desarrollo del frontend se trabajo con ReactJs.
                            </p>
                        </div>
                        <button className='btn btnProyect' onClick={handleClick}>Ir al proyecto</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
