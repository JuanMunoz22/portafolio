import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
        <div className='vg-footer'>
            <h1 className='text-center'>Portafolio</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 py-3'>
                        <div className='footer-info'>
                            <p>Donde encontrarme</p>
                            <hr className='divider' />
                            <p className='fs-large fg-white'>Guinea #3134, Alto Hospicio</p>
                        </div>
                    </div>
                <div className='col-md-6 col-lg-3 py-3'>
                    <div className='float-lg-right'>
                        <p>Sigueme</p>
                        <hr className='divider' />
                        <ul className='list-unstyled'>
                            <li>
                                <NavLink
                                    to='/'
                                >
                                    Instagram
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/'
                                >
                                    Facebook
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/'
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 py-3'>
                    <div className='float-lg-right'>
                        <p>Contactame</p>
                        <hr className='divider' />
                        <ul className='list-unstyled'>
                            <li>juantpiqq@gmail.com</li>
                            <li>+56964633825</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <p>Copyright &copy;2022. Juan Luis Muñoz Barraza</p>
            </div>
        </div>
    </div>
    </>
  )
}
