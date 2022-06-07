import React from 'react'

//Imagenes


export const HomePage = () => {

  const imgPerfil = 'https://res.cloudinary.com/digitalhouse/image/upload/v1652813486/ecdx8clhn6wjzl4yqi2e.jpg';

  return (  
      <>
        <div className='vg-page page-about' id='about'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-4 py-3'>
                <div className='img-place wow fadeInUp'>
                  <img src={imgPerfil} alt=''/>
                </div>
              </div>
            <div className='col-lg-6 offset-lg-1 wow fadeInRight'>
              <h1 className='fw-light'>Juan Muñoz</h1>
              <h5 className='fg-theme mb-3'>Desarrollador Web</h5>
              <p className='text-muted'>
                Estudiante de ingeniería en informática en
                constante crecimiento. Soy bastante autodidacta,
                ya que siempre intento aprender nuevas
                tecnologías y familiarizar diferentes áreas de un
                informático, esto me ha ayudado bastante a que si
                bien, puedo desconocer y desconozco una infinidad
                de temas, logro obtener la determinación para
                aprender ellos y tener un buen rendimiento.
              </p>
              <ul className='theme-list'>
                <li><b>De: </b> Iquique, Chile</li>
                <li><b>Edad: </b> 28 Años</li>
                <li><b>Telefono: </b> +56964633825</li>
              </ul>
              <button className='btn btn-theme-outline'>Descargar Curriculum</button>
            </div>
          </div>
        </div>
      
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-md-6 wow fadeInRight'>
              <h2 className='fw-normal'>Educación</h2>
              <ul className='timeline mt-4 pr-md-5'>
                <li>
                  <div className='tittle'>2018 - 2022</div>
                  <div className='details'>
                    <h5>Ingenieria de ejecución en informatica</h5>
                    <small className='fg-theme'>Universidad Santo Tómas</small>
                    <p>Iquique, Chile</p>
                  </div>
                </li>
                <li>
                  <div className='tittle'>2010 - 2011</div>
                  <div className='details'>
                    <h5>Tecnico nivel medio en electrónica</h5>
                    <small className='fg-theme'>Colegio metodista William Taylor</small>
                    <p>Alto Hospicio, Chile</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className='col-md-6 wow fadeInRight' data-wow-delay='200ms'>
              <h2 className='fw-normal'>Experiencia</h2>
              <ul className='timeline mt-4 pr-md-5'>
                <li>
                  <div className='tittle'>2021</div>
                  <div className='details'>
                    <h5>Practica Profesional</h5>
                    <small className='fg-theme'>Grupo Ciruelo</small>
                    <p>
                    Trabajando en el área de investigación, desarrollo e
                    innovación de la empresa en el cual me encargue de
                    aportar con nuevas ideas de desarrollo e investigar
                    nuevas tecnologías para implementar en la
                    empresa.
                    </p>
                  </div>
                </li>
                <li>
                  <div className='tittle'>2020 - 2021</div>
                  <div className='details'>
                    <h5>Soporte Técnico</h5>
                    <small className='fg-theme'>TotalPack</small>
                    <p>
                    Contratado bajo la empresa Jaime Araya González,
                    en donde era el encargado de realizar
                    mantenciones e instalaciones de gestores de fila a
                    diferentes clientes de la primera región de la
                    empresa Totalpack, algunos de ellos son Banco
                    Estado, Banco de Chile, Falabella, Entel, entre otros.
                    Además de realizar capacitaciones sobre el uso de
                    ellos a los diferentes ejecutivos y jefaturas de las
                    sucursales correspondientes a la primera región.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
