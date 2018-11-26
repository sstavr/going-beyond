import React from 'react';

import newLogo from '../../assets/images/going-beyond.png';
import classes from './Header.module.css';

const header = () => {
    return (
        <div className={classes.App-header}>
            <img src={newLogo} alt="Going Beyond" className={classes.HeaderImage}  />
        </div>
    );

}

export default header;