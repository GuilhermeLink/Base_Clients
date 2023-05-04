import { CardContainer } from "../card_container"
import { StyledCreateComentCard } from "./style"





export const CreateComentCard = () => {

    return (
        <CardContainer>
            <StyledCreateComentCard>
                <div className="create-coment-header">
                    <h2 className="profile-initials">SL</h2>
                    <p>Samuel Leão</p>
                </div>
                <textarea name="" id="" cols={30} rows={7} placeholder="Digite seu comentario aqui"></textarea>
                <button>Comentar</button>
                <div className="shortcuts">
                    <p>Gostei muito!</p>
                    <p>Incrivel</p>
                    <p>Recomendarei para os meus amigos</p>
                </div>
            </StyledCreateComentCard>
        </CardContainer>

    )

}