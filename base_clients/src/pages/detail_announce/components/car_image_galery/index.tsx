import { Gallery } from "../.."
import { CardContainer } from "../card_container"
import { StyledCarImageGalery } from "./style"


interface ICarImageGalery {
    galery: Gallery
    className?: string
}

export const CarImageGalery = ({ galery,
    className }: ICarImageGalery) => {
    return (
        <CardContainer className={className}>
            <StyledCarImageGalery>
                <h2>Fotos</h2>
                <div className="galery">
                    {galery.images.map(image => {
                        return (
                            <div className="box-image">
                                <img src={image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </StyledCarImageGalery>
        </CardContainer>
    )
}