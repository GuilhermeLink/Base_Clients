import { useState } from 'react'
import { HomePage, Main, Modal } from './styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/loginContext'


const Home = () => {

  const { user } = useContext(AuthContext)
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  const cleanToken = () => {
    localStorage.removeItem('@usertoken:token')
  }

  return (
    <div>
      <HomePage>
        <h1 className='logo'>
        <span>Base Clients</span>
        </h1>
        <Link to='/login' onClick={cleanToken}>Sair</Link>
      </HomePage>
      <Main>
        <section>
          <div>
            <h2>Olá, <span>{user.name}</span></h2>
          </div>
        </section>
        
        <div className='home'>
          <div>
            <h3>Clientes</h3>
            <button onClick={() => setModal(true)}>+</button>
            {modal ? 
            
              <Modal modal={modal} className='modalScreen'>
                <section className='modalCard'>

                  <header>
                    <h3>Cadastrar Cliente:</h3>
                    <button onClick={closeModal}>x</button>
                  </header>

                  <form>                   
                    <button type='submit'>Cadastrar Cliente</button>
                  </form>

                </section>
              </Modal>
            :
            null  
            }
          </div>
        </div>
                  
      </Main>
    </div>
  )
}

export default Home