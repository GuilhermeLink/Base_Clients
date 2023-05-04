import { StyledCarImageCard } from "./style"


interface ICarImageCard{
    sourceImage: string
}

export const CarImageCard = ({sourceImage}: ICarImageCard) => {
    return(
        <StyledCarImageCard>
            <div className="card-car">
                <img src={sourceImage} alt="" />
            </div>
        </StyledCarImageCard>
    )
}