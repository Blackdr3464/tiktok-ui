import classNames from 'classnames/bind';
import React from 'react';
import { GrPrevious } from 'react-icons/gr';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <GrPrevious />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
