import React from 'react';
import { Form } from '../components/Form'

export const Login = () => {
    return (
        <div className='login'>
            <Form title={'Login'} submitText={'Login'} isRegisterPage={false}></Form>
        </div>
    );
};