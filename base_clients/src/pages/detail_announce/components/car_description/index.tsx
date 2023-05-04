import { CardContainer } from "../card_container";
import { StyledCarDescriptionCard } from "./style"


interface ICarDescriptionCardProps{
    description: string;
}


export const CarDescriptionCard = ({description}: ICarDescriptionCardProps) =>{
    return(
        <CardContainer>
            <StyledCarDescriptionCard>
                <h2>Descrição</h2>
                <p>{description}</p>
            </StyledCarDescriptionCard>

        </CardContainer>
    )
}