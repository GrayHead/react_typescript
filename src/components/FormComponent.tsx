import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthDataModel} from "../models/AuthDataModel";
import {authService} from "../services/api.servce";

const FormComponent = () => {

    const {
        handleSubmit,
        register
    } = useForm<AuthDataModel>({
        defaultValues:{username:'userSZ1',password:'P@$$word1'}
    });

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
        console.log(isAuth);
    }
    return (
        <div>
            <h3>Login form</h3>
            {isAuthState ? <div>ok</div> : <div>not ok</div>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>

        </div>
    );
};

export default FormComponent;
