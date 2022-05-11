//The component
import React, {Fragment} from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';


import styles from './Page.module.css'

const Page = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* form */}
                <Form />
                {/* error */}
                {/* <Error /> */}
                {/* loader */}
                {/* <Loader /> */}
                {/* forecast */}

            </div>
        </Fragment>
    );
};

export default Page;