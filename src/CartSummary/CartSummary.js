import React from 'react';

import FeatureForSummary from './FeatureForSummary';

function CartSummary(props) {
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
        );

    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
    
        return (
            <FeatureForSummary
            USCurrencyConvert={props.USCurrencyConvert}
            feature={feature}
            featureHash={featureHash}
            selectedOption={selectedOption}>
            </FeatureForSummary>
            );
        });
    return(
        <div>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {props.USCurrencyConvert.format(total)}
                </div>
            </div>
        </div>
    )
}

export default CartSummary;