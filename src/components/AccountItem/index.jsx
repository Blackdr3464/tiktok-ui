import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <AiFillCheckCircle className={cx('check-icon')} />
                    )}
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
