import React, { use } from 'react';

const PricingOption = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>

        </div>
    );
};

export default PricingOption;