import { Container, Description, Title } from "./styles";


interface NotFoundProps {
    title?: string
    description?: string
}

const NotFound: React.FC<NotFoundProps> = ({title, description}) => {
    return (
        <Container>
            <Title>{title ?? "Página não encontrada"}</Title>
            <Description>{description ?? "A página informada não existe no site."}</Description>
        </Container>
    );
}

export {
    NotFound
};