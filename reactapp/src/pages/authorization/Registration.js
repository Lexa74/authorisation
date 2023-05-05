import React from 'react';
import { Form } from '../components/Form'

export const Registration = () => {
    return (
        <div className='registration'>
            <Form title={'Registration'} submitText={'Register'} isRegisterPage={true}></Form>
        </div>
    );
};