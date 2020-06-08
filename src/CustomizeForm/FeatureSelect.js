import React from 'react';

function FeatureSelect(props) {
    return (
    <div key={props.itemHash} className="feature__item">
        <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={props.slugif(props.name)}
            checked={props.item.name === props.selected[props.name].name}
            onChange={e => props.updateFunc(props.name, props.item)}
        />
        <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({props.USCurrencyConvert.format(props.item.cost)})
        </label>
    </div>
    );
}

export default FeatureSelect;