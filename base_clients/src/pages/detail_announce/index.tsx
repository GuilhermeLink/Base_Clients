import { Container } from "../../components/container"
import { StyledDetailAnnouncementPage } from "./style"

export interface ICarAnnouncementDetail {
    year: number;
    km: number;
    price_fipe: number;
    price: number;
    description: string;
    image: string;
    mark: string;
    model: string;
    fuel: string;
    color: string;
    gallery: Gallery;
}

export interface Gallery {
    images: string[];
}



export const DetailAnnouncementPage = () => {
    return (
        <StyledDetailAnnouncementPage>
            {/* <Navbar /> */}
            <Container>
                <h2>Anuncio detail page                </h2>
            </Container>
        </StyledDetailAnnouncementPage>

    )
}