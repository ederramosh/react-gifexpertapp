import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategories = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('Agrega una categoria');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        //Simple validacion para que no acepte valores vacios y sin espacios
        if( inputValue.trim().length > 2) {
            //Aqui siempre llamamos un un callback para poderlo procesar.
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategories;