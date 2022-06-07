import React from 'react'

import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  //Imagenes 
  const background = 'https://res.cloudinary.com/digitalhouse/image/upload/v1654638858/Portafolio/bg_image_1_eo4nkx.jpg';


  return (
    <>
      <div className='btn-back_to_top'>
        <span className='ti-arrow-up'></span>
      </div>

      <div className='vg-page page-home' id='home' style={{backgroundImage: `url('${background}')`}}>
        <div className='navbar navbar-expand-lg navbar-dark sticky' data-offset="500">
          <div className='container'>
            <NavLink
              to='/'
              className='navbar-brand'
            >
              Portafolio
            </NavLink>
            <button className='navbar-toggler' data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
              <span className='ti-menu'></span>
            </button>
            <div className='collapse navbar-collapse' id="main-navbar">
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <NavLink
                    to='#home'
                    className='nav-link'
                    data-animate='scrolling'
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='#about'
                    className='nav-link'
                    data-animate='scrolling'
                  >
                    Sobre Mi
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='#proyectos'
                    className='nav-link'
                    data-animate='scrolling'
                  >
                    Proyectos
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='#tecnologias'
                    className='nav-link'
                    data-animate='scrolling'
                  >
                    Tecnologias
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    to='#contacto'
                    className='nav-link'
                    data-animate='scrolling'
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
              <ul className='nav ml-auto'>
                <li className='nav-item'>
                  <button className='btn btn-fab btn-theme no-shadow'>Es</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='caption-header text-center wow zoomInDown'>
          <h5 className='fw-normal'>Bienvenidos!</h5>
          <h1 className='fw-light mb-4'>Soy <b className='fg-theme'>Juan </b>Muñoz</h1>
          <div className='badge'>Desarrollador Web</div>
        </div>
        <div className='floating-button'><span className='ti-mouse'></span></div>
      </div>
    </>
  )
}
