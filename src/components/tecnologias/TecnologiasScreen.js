import React from 'react'

export const TecnologiasScreen = () => {
  //Imagenes
  const html = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654652912/Portafolio/Tecnologias/HTML_yzhy7k.png';
  const css = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654653058/Portafolio/Tecnologias/CSS_pjtgx3.png';
  const js = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654653390/Portafolio/Tecnologias/JavaScript-logo_awe0kx.png';
  const nodejs = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654653630/Portafolio/Tecnologias/nodejs_xr52t6.png';

  return (
    <>
      <div className='vg-page page-client' id='tecnologias'>
        <br/>
        <h1 className='text-center fw-normal wow fadeIn'>Tecnologias que manejo</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 col-xl-3 item'>
              <div className='img-place wow fadeInUp'>
                <img src={html} alt='' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-3 item'>
              <div className='img-place wow fadeInUp'>
                <img src={css} alt='' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-3 item'>
              <div className='img-place wow fadeInUp'>
                <img src={js} alt='' />
              </div>
            </div>
            <div className='col-md-6 col-lg-4 col-xl-3 item'>
              <div className='img-place wow fadeInUp'>
                <img src={nodejs} alt='' />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
