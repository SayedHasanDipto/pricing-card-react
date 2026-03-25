import React, { use } from 'react';
import PriceDetails from './PriceDetails';

const PriceCard = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    return (
        <div className='container mx-auto grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2'>
            {
                pricingData.map(pricing => <PriceDetails key={pricing.id} pricing={pricing}></PriceDetails>)
            }
        </div>
    );
};

export default PriceCard;