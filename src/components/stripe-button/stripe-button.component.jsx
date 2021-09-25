import React from "react";
import StripeCheckout from "react-stripe-checkout";


const stripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JdVZ7SDQkfjWIqdh70VrVDL9LDPdMxuTdzkyBGZPXhHZV5WCfoWOuD819FUQtV0Bgyo7Hv0gR8Rue7pOrVmyViB00BXZylwqm';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
        lable ='Pay Now'
        name='CRWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}

        />
    );

};

export default stripeCheckoutButton;