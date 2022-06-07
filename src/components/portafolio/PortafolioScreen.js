import React from 'react'

export const PortafolioScreen = () => {
    const certificadorBlockchain = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654645188/Portafolio/Works/Certificador-blockchain_woiplw.png';

  return (

    <>
        <div className='vg-page page-portfolio' id="portfolio">
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
                                <p>Proyecto de titulo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
