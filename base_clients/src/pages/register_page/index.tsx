import { useForm } from "react-hook-form"
import { Container } from "../../components/container"
import { useRequests } from "../../hooks/RequestsHooks"
import { StyledRegisterPage } from "./style"
import { FormDataRegisterUser, schema } from "../../schemas/register_user_schema"
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';



export const RegisterPage = () => {
    const {registerUserRequest} = useRequests()
    const { register, handleSubmit } = useForm<FormDataRegisterUser>({
        resolver: yupResolver(schema)
      });
    const navigate = useNavigate();
    const handleRegister = async (data: FormDataRegisterUser) => {
    console.log(data);
    const response = await registerUserRequest(data);
    if (response && response.status === 200) {
        navigate('/');
    }
    };

    return (
        <Container>
            <StyledRegisterPage>
                <h2>Cadastro</h2>
                <p>Informações pessoais</p>
                <form className="" onSubmit={handleSubmit(handleRegister)}>
                    <label>
                        <p>Nome:</p>
                        <input type="text" placeholder="Ex: Samuel Leão" {...register('name')}/>
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type="text" placeholder="Ex: samuel@kenzie.com" {...register('email')} />
                    </label>
                    <label>
                        <p>Celular:</p>
                        <input type="text" placeholder="Ex: (DDD) 90000-0000" {...register('phone')}/>
                    </label>
                    <label>
                        <p>Senha</p>
                        <input type="password" placeholder="Digitar Senha" {...register('password')}/>
                    </label>
                    <label>
                        <p>Confirmar Senha</p>
                        <input type="password" placeholder="Digitar Senha" {...register('confirmPassword')}/>
                    </label>
                    <button type="submit" className="btn-submit">Finalizar Cadastro</button>
                </form>
            </StyledRegisterPage>
        </Container>
    )
}