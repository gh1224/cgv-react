import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();

    const handleSearchKeyChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSearchKeySubmit = (e) => {
        e.preventDefault();
        navigate('/search?key=' + searchKey);
    }

    return (
        <header>
            <div id="title-bar">
                <div className="container">
                    <div>
                        <Link to="/"><img src={process.env.PUBLIC_URL + '/header/logo.png'} alt="CGV 로고" /></Link>
                        <span>CULTUREPLEX</span>
                    </div>
                    <UserNavList />
                </div>
            </div>
            <div id="nav-bar">
                <nav className="container">
                    <MovieNavList />
                    <form onSubmit={handleSearchKeySubmit}>
                        <input type="text" value={searchKey} onChange={handleSearchKeyChange} />
                        <button type="submit">
                            <img src={process.env.PUBLIC_URL + '/header/search.png'} alt="검색 아이콘" />
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
};

const UserNavList = () => {
    return (
        <ul>
            <li>
                <Link to="/login">
                    <img src={process.env.PUBLIC_URL + '/header/login.png'} alt="로그인 아이콘" />
                    <span>로그인</span>
                </Link>
            </li>
            <li>
                <Link to="/signup">
                    <img src={process.env.PUBLIC_URL + '/header/join.png'} alt="회원가입 아이콘" />
                    <span>회원가입</span>
                </Link>
            </li>
            <li>
                <Link to="/mypage">
                    <img src={process.env.PUBLIC_URL + '/header/my.png'} alt="마이페이지 아이콘" />
                    <span>MY CGV</span>
                </Link>
            </li>
            <li>
                <Link to="/support">
                    <img src={process.env.PUBLIC_URL + '/header/service-center.png'} alt="고객센터 아이콘" />
                    <span>고객센터</span>
                </Link>
            </li>
        </ul>
    );
};

const MovieNavList = () => {
    return (
        <ul>
            <li><Link to="/movie">영화</Link></li>
            <li><Link to="/theater">극장</Link></li>
        </ul>
    );
};

export default Header;
