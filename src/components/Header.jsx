import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import './styles/Home.css'


export default class Header extends Component{
    render(){
        return (
            <header>
                <h1 class="title"><Link to='/'>Квиз-сайт</Link></h1>
                <div class="headerSearch">
                    <h3 class="headerElem"><Link to="/catalog">Каталог</Link></h3>
                    <h3 class="headerElem"><Link to="/rating">Рейтинг игроков</Link></h3>
                    <h3 class="headerElem"><Link to="/creator">Создание</Link></h3>
                </div>
                <div class="headerLogin">
                    <h2 class="headerElem"><Link to="/register">Регистрация</Link></h2>
                    <h2 class="login"><Link to="/login">Вход</Link></h2>
                </div>
            </header>
        )
    }
}
