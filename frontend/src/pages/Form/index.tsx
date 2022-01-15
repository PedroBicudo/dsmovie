import FormCard from "components/FormCard";
import React from "react";
import { useParams } from "react-router-dom";


const Form: React.FC = () => {
    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
};

export default Form;
