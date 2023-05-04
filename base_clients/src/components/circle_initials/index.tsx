import { StyledCircleInitials } from "./style"

interface ICircleInitials{
    first: string
    second: string
    size?: number
}

export const CircleInitials = ({first,second,size}:ICircleInitials) => {
    return(
        <StyledCircleInitials size={size}>
            {first}{second}
        </StyledCircleInitials>
    )
}