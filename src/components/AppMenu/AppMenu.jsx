import React from "react";
import { HeaderContainer, Container, List, Head, HeaderItem, HeaderLink, HeaderButton } from './AppMenu.styled';
import icon from '../../images/mobispace.webp';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Container>
                    <img src={icon} alt="Mobispace Icon" />
                    <Head>Mobispace</Head>
                    <List>
                        <HeaderItem><HeaderLink href="">Languages</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="">Services</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="">About</HeaderLink></HeaderItem>
                        <HeaderItem><HeaderLink href="">For Land Owners</HeaderLink></HeaderItem>
                    </List>
                    <HeaderButton>Send Request</HeaderButton>
                </Container>
            </HeaderContainer>
        </>
    )
};

export default Header;