import React, { Fragment, useState } from 'react';

import AddCategories from './components/AddCategories';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['Naruto'] );

    return (
        <Fragment>
            <h1>GifExpertApp</h1>

            <AddCategories setCategories = { setCategories } />
            
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </Fragment>
    )
}

export default GifExpertApp
