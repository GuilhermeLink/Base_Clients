import { StyledCardContainer } from "./style"

interface ICardContainerProps {
    children: React.ReactNode
    className?: string
}


export const CardContainer = ({ children, className }: ICardContainerProps) => {
    return (
        <StyledCardContainer className={className}>
            {children}
        </StyledCardContainer>
    )
}