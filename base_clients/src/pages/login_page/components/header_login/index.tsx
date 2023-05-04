import React from 'react'
import { StyledHeaderLogin } from './style'

export default function Header() {
  return (
    <StyledHeaderLogin>
        <div className='logo_header'>
          <h1>Base Clients</h1>
        </div>
        <img className='burguer_icon' src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" alt="" />
        <div className='login_desktop'>
          <p>Login</p>
          <button>Cadastrar</button>
        </div>
    </StyledHeaderLogin>
  )
}
