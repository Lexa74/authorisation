import React from 'react';
import './form.scss'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postUser, postLogin } from '../../service/authorization'

export const Form = ({ title, submitText, isRegisterPage = false}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if(isRegisterPage) {
            postUser({
                name: data.name,
                email: data.email,
                password: data.password
            })
            alert('User created successfully');
            navigate('/login')
        } else {
            try {
                const res = await postLogin({
                    email: data.email,
                    password: data.password
                })
                navigate('/home')
            }
            catch (err) {
                if(err.response.status === 401) {
                    alert('Invalid username or password');
                } else {
                    alert(err.message)
                }
            }
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{title}</h2>
                {isRegisterPage && (
                    <>
                        <label htmlFor="name">Name</label>
                        <input
                            className={`${errors.name && 'error'}`}
                            type="name"
                            id="name"
                            placeholder='Name'
                            {...register("name",
                                {
                                    required: "Name is required",
                                    maxLength: 20,
                                    pattern: {
                                        value: /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
                                        message: 'Invalid name'
                                    } })}
                        />
                        {errors.name && <p className='error'>{errors.name.message}</p>}
                    </>
                )}
                <label htmlFor="email">E-mail</label>
                <input
                    className={`${errors.email && 'error'}`}
                    type="email"
                    id="email"
                    placeholder='E-mail'
                    {...register("email",
                    {
                        required: "Email is required",
                        maxLength: 20,
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
                            message: 'Invalid e-mail'
                        } })}
                       />
                {errors.email && <p className='error'>{errors.email.message}</p>}

                <label htmlFor="password">Password</label>
                <input
                    className={`${errors.password && 'error'}`}
                    type='password'
                    id="password"
                    placeholder='Password'
                       {...register("password", {
                           required: "Password is required",
                           minLength: 6,
                           pattern: {
                               value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/g,
                               message: 'Invalid password'
                           } })} />
                {errors.password && <p className='error'>{errors.password.message}</p>}
                <div className="wrapper-buttons">
                        <input type="submit"
                               className='wrapper-buttons__item btn black'
                               value={submitText}
                        />
                    {!isRegisterPage &&
                    <Link
                        className={'wrapper-buttons__item btn'}
                        to={'/register'}
                    >
                        Registration
                    </Link>}
                </div>
            </form>
        </div>
    );
};