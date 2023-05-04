import styled from "styled-components";



export const StyledCarImageGalery = styled.div`
    width: 100%;
    height: 20rem;
    padding-bottom: 5rem;
    h2{
        margin-bottom: 2rem;
    }
    .galery{
        overflow-y: auto;
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        width: 100%;
        max-height: 100%;
        padding-bottom: 3rem;
    }
    .box-image{
        background-color: #E9ECEF;
        flex-basis: 30%;
        height: 30%;
        border-radius: 4px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`