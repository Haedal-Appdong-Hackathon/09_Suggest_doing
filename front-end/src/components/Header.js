import React from 'react'
import { Link } from 'react-router-dom'
import Sign from '../Sign'

import './Style.css'
export default function Header(){
    return(
        <nav className="header-container">
            <ul className="Wrap">
                <li><Link className="header-sign" to='Sign'>회원가입</Link></li>
                <li>할일추천</li>
                <li><Link className="header-login" to='/'>로그인</Link></li>
            </ul>
            <div className="header-wrap"></div>
        </nav>
    )
}