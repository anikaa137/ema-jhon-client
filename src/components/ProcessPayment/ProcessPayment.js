import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import SplitCartForm from '../SplitCartForm/SplitCartForm';
import SimplePaymentCart from '../SimplePaymentCart/SimplePaymentCart';


const stripePromise = loadStripe('pk_test_51IdFcaJmKv0M03CV9dEWldax0QhZUPRUr1ehgQS3z1ROT2ZqjtGvrWxy6sEOKBrgubGwoQ4acSj9oMQnmtIKuVxA00WXB3FuMQ');
const ProcessPayment = () => {

    return (
        <Elements stripe={stripePromise}>
            <SimplePaymentCart/>
      </Elements>
    );
};

export default ProcessPayment;