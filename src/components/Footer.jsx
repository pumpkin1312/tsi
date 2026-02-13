import React, { Component } from 'react'
// import './styles/Footer.css'
import { Link } from 'react-router-dom'

export default class Footer extends Component{
    render(){
        return (
            <footer className='font-["Alegreya"] flex justify-around p-[35px] bg-[#FEEFC8]'>
                <div>
                    <h3 className='text-xl'><Link to="/">Квиз-сайт</Link></h3>
                </div>
                <div>
                    <h3 className='underline'>Компания</h3>
                    <p class="footerElem"><Link to="/aboutUs">О нас</Link></p>
                    <p class="footerElem"><Link to="/contacts">Контакты</Link></p>
                </div>
                <div>
                    <h3 className='underline'>Социальные сети</h3>
                    <p>Instagram</p>
                    <p>И тд</p>
                </div>
                <div>
                    <h3 className='underline'>Игрокам</h3>
                    <p>Инфа</p>
                    <p>Какая-то</p>
                </div>
            </footer>
        )
    }
}
