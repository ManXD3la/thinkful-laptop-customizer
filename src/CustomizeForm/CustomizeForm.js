import React from 'react';

import FeatureSelect from './FeatureSelect';

function CustomizeForm(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
            const itemHash = props.slugif(JSON.stringify(item));
            return (
                <FeatureSelect
                    slugif={props.slugif}
                    USCurrencyConvert={props.USCurrencyConvert}
                    selected={props.selected}
                    updateFunc={props.updateFunc}
                    itemHash={itemHash}
                    name={feature}
                    item={item}>
                </FeatureSelect>
            );
        });

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
      });

    
    return (features);
}

export default CustomizeForm;