import { CircleInitials } from "../../../../components/circle_initials"
import { StyledCardAnnounce } from "./style"



export const CardAnnounce = () => {
    return (
        <StyledCardAnnounce>

            <div className="card-announce">
                <div className="car-image-container">
                    <p>Imagem</p>
                </div>
                <div className="car-info">
                    <p>Maserati - Ghibli</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, aliquid dignissimos ducimus consequuntur nam libero suscipit vel optio ipsam voluptatum odio laboriosam quae sequi dolores doloremque quidem, obcaecati explicabo maiores!</p>
                    <div className="owner-accounce"><CircleInitials size={2} first="S" second="L" /> <span>Samuel Leão</span></div>
                    <div className="car-info-detail">
                        <div className="left-side">
                            <span>0 KM</span>
                            <span>2019</span>
                        </div>
                        <div className="right-side">
                            <span>R$ 100.000,00</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledCardAnnounce>
    )
}