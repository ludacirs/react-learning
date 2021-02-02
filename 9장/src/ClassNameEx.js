import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const ClassNameEx = ()=>{
    const cx = classNames.bind(styles);

    return(
        <div className={cx('wrapper')}>
            Hello, My name is <span className="something"> ClassNameEx!!</span>
        </div>
    )
}

export default ClassNameEx;