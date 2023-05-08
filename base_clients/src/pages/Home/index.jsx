import { HomePage, Main, Modal } from './styles'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ClientsContext } from '../../context/clienteContext';import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const Home = () => {

  const { clients, createClient, deleteClient } = useContext(ClientsContext);
  const [modal, setModal] = useState(false)
  const [modalContato, setModalContato] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [contato, setContato] = useState([]);
  const [nomeContato, setNomeContato] = useState("");

  const handleOpenModalContato = (id) => {
    setClienteSelecionado(clients.find(cliente => cliente.id === id));
    setModalContato(true);
  }

  const closeModalContato = () => {
    setModalContato(false);
    setClienteSelecionado(null);
  };

  const handleNomeContatoChange = (event) => {
    setContato(event.target.value);
    setNomeContato(event.target.value);
  }

  const handleEmailContatoChange = (event) => {
    setContato({ ...contato, email: event.target.value });
  };

  const handleSubmitContato = (data) => {
    const { nome, email } = data;
    const newContato = {
      id: uuidv4(),
      nome,
      email,
      clienteId: clienteSelecionado.id,
    };
    setContato([newContato]);
    setModalContato(false);
  };

  const { register, handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setModal(false)
  }

  const cleanToken = () => {
    localStorage.removeItem('@usertoken:token')
  }

  const handleDeleteCliente = (clientId) => {
    deleteClient(clientId);
  };

  const handleDeleteContato = (clienteId) => {
    const newContacts = contato.filter((contato) => contato.id !== clienteId);
    setContato(newContacts);
  };

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
            <h2>Cadastro de Clientes:</h2>
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
                  <form onSubmit={handleSubmit(createClient)}>
                    <label>
                      Nome:
                      <input type='text' placeholder='Digite aqui seu nome' {...register('name')} />
                    </label>
                    <label>
                      Email:
                      <input type='email' placeholder='Digite aqui seu email...' {...register('email')} />
                    </label>
                    <label>
                      Telefone:
                      <input type='phone' placeholder='Telefone' {...register('phone')} />
                    </label>
                    <button type="submit">Cadastrar</button>
                  </form>
                </section>
              </Modal>
              :
              null  
            }
          </div>
        </div>
        {clients?.map(cliente => (
          <div key={cliente.id}>
            <h4>{cliente.nome} - {cliente.email}</h4>
            <button onClick={() => handleDeleteCliente(cliente.id)}>Deletar Cliente</button>
            <button onClick={() => handleOpenModalContato(cliente.id)}>Adicionar Contato</button>
            {modalContato && cliente.id === clienteSelecionado.id ? 
              <Modal modal={modalContato} className='modalScreen'>
                <section className='modalCard'>
                  <header>
                    <h3>Cadastrar Contato:</h3>
                    <button onClick={closeModalContato}>x</button>
                  </header>
                  <form onSubmit={handleSubmitContato}>     
                    <label>
                      Nome:
                      <input type="text" value={nomeContato} onChange={handleNomeContatoChange} />
                    </label>
                    <label>
                      E-mail:
                      <input type="mail" value={contato.email} onChange={handleEmailContatoChange} />
                    </label>
                    <button type='submit'>Cadastrar Contato</button>
                  </form>
                </section>
              </Modal>
              :
              null  
            }
            <ul>
              {contato?.filter(contato => contato.clienteId === cliente.id).map(contato => (
                <li key={contato.id}>
                  {contato.nome} - {contato.email} 
                  <button onClick={() => handleDeleteContato(contato.id)}>Deletar Contato</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Main>
    </div>
  );
}

export default Home