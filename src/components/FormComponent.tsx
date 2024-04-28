import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../valiadtors/user.validator";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}}
        = useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);// some stuff
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label>
                    <input type={'number'} {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
