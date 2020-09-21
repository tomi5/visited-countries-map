import React from 'react'
import { StyledButton, IconStyleWrapper } from "./style";

type ButtonProps = {
    name: string;
    icon?: any;
    onClick?: any;
    padding?: string;
    paddingIcon?: string
    isModalOpen?: boolean;
    "aria-expanded"?: boolean;
    action?: ActionConfirm;
    posAbsolute?: boolean;
    children?: React.ReactNode;

}

const Button = ((props: ButtonProps) => {
    const { icon: IconSVG, children: buttonText, paddingIcon } = props

    const IconContainer = () => {
        return (
            <IconStyleWrapper padding={paddingIcon}>
                <IconSVG />
            </IconStyleWrapper>)
    }

    return (
        <StyledButton {...props}>
            {buttonText}
            {IconSVG ? <IconContainer /> : null}
        </StyledButton>
    )
})

export default Button

