import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';
import { BiSearch } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue
            )}&type=less`
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
            });
    }, [searchValue]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result, idx) => (
                                <AccountItem key={idx} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        type='text'
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className={cx('search-icon')}>
                        <BiSearch className={cx('icon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
