import React from 'react'
import Header from './components/header_login'
import LoginContent from './components/login_content'
import { StyledLogin } from './style'
import { Container } from '../../components/container'


export default function Login() {

  return (
    <Container>
        <LoginContent/>
    </Container>
  )
}
