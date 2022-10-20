import React, { PureComponent } from 'react';
import './Spinner.scss';
import { classNames } from 'shared/lib/classNames/classNames';

class Spinner extends PureComponent {
    render() {
        return (
            <div className={classNames('lds-ring')}>
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
}

export default Spinner;
