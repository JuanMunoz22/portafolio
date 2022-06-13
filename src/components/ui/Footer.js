import React from 'react'

export const Footer = () => {

const github = () => {
    window.open('https://github.com/JuanMunoz22');
} 

const linkedin = () => {
    window.open('https://www.linkedin.com/in/juanluismunozbarraza/')
}


  return (
    <>
        <div className='vg-footer'>
            <div className='col-12 social'>
                <center>
                    <ion-icon onClick={github} name="logo-github"></ion-icon>
                    <ion-icon onClick={linkedin} name="logo-linkedin"></ion-icon>
                </center>
            </div>
            <div className='container'>
            <div className='col-12'>
                <p>Copyright &copy;2022. Juan Luis Muñoz Barraza</p>
            </div>
        </div>
    </div>
    </>
  )
}
