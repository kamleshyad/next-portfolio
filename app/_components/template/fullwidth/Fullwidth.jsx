import { Container } from "../container/Container"

export const Fullwidth = ({children}) => {
    return (
        <Container container="lg-">
            <div className="site-content">
                {children}
            </div>
        </Container>      
    )
}