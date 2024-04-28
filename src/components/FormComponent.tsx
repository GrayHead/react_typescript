import React from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {

    const {handleSubmit, register} = useForm<IFormProps>();


    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="number" {...register('age')}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
