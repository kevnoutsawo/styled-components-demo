import { StyledHedader, Nav, Logo } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"

export default function Header() {
    return (
        <StyledHedader>
            <Container>
                <Nav>
                    <Logo src='../../public/images/logo.svg' alt='' />
                    <Button>Try It Free</Button>
                </Nav>
            </Container>
        </StyledHedader>
    )
}