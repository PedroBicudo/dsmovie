import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "styles/layouts/Flex";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import { CardContainer, Button, CardContentContainer, Image, Title, Form, FormGroup, FormGroupInput, FormGroupLabel, FormGroupSelect } from "./styles";

type Props = {
    movieId: string
}

const FormCard: React.FC<Props> = ({ movieId }) => {

    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data as Movie);
            });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;
                
        if (!validateEmail(email)) {
            return
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                movieId: movieId,
                email: email,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        })

    }

    return (
        <Card movie={movie} handleSubmitEvent={handleSubmit} />
    );
};

interface CardProps {
    movie?: Movie;
    handleSubmitEvent: Function;
}

const Card: React.FC<CardProps> = ({movie, handleSubmitEvent}) => {
    return (
        <CardContainer>
            <CardImage image={movie?.image} title={movie?.title} />
            <CardContent title={movie?.title} handleSubmitEvent={handleSubmitEvent}/>
        </CardContainer>
    );

}

interface CardImageProps {
    image?: string;
    title?: string;
}

const CardImage: React.FC<CardImageProps> = ({ image, title }) => {
    return (
        <Image
            src={image}
            alt={title}
        />

    );

}

interface CardContentProps {
    title?: string;
    handleSubmitEvent: any;
}

const CardContent: React.FC<CardContentProps> = ({title, handleSubmitEvent}) => {
    return (
        <CardContentContainer>
                <CardTitle title={title} />
                <Form onSubmit={handleSubmitEvent}>
                    <EmailFormGroup />
                    <SelectFormGroup />
                    <ButtonSubmit />
                </Form>

                <ButtonCancel/>
        </CardContentContainer>
    );
}

interface CardTitleProps {
    title?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
    return (
        <Title>{title}</Title>
    );
}

const EmailFormGroup: React.FC = () => {
    return (
        <FormGroup>
            <FormGroupLabel htmlFor="email">Informe seu email</FormGroupLabel>
            <FormGroupInput
                type="email"
                className="form-control dsmovie-form__input"
                id="email"
            />
        </FormGroup>
    );
    
}

const SelectFormGroup: React.FC = () => {
    return (
        <FormGroup>
            <FormGroupLabel htmlFor="score">Informe sua avaliação</FormGroupLabel>
            <FormGroupSelect className="form-control dsmovie-form__input" id="score">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </FormGroupSelect>
        </FormGroup>
    );
}

const ButtonSubmit: React.FC = () => {
    return (
        <Flex gap={0} justify="center">
            <Button
                type="submit"
            >
                Salvar
            </Button>
        </Flex>

    );
}

const ButtonCancel: React.FC = () => {
    return (
        <Link to="/">
            <Button>
                Cancelar
            </Button>
        </Link>

    );
}



export default FormCard;
