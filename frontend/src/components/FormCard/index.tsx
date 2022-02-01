import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "styles/layouts/Flex";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import { Card, CardButton, CardContent, CardImage, CardTitle, Form, FormGroup, FormGroupInput, FormGroupLabel, FormGroupSelect } from "./styles";

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
        <Card>
            <CardImage
                src={movie?.image}
                alt={movie?.title}
            />
            <CardContent>
                <CardTitle>{movie?.title}</CardTitle>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormGroupLabel htmlFor="email">Informe seu email</FormGroupLabel>
                        <FormGroupInput
                            type="email"
                            className="form-control dsmovie-form__input"
                            id="email"
                        />
                    </FormGroup>
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
                    <Flex gap={0} justify="center">
                        <CardButton
                            type="submit"
                        >
                            Salvar
                        </CardButton>
                    </Flex>

                </Form>

                <Link to="/">
                    <CardButton>
                        Cancelar
                    </CardButton>
                </Link>
            </CardContent>
        </Card>
    );
};

export default FormCard;
