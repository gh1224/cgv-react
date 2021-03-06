import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';
import logo from 'assets/img/logo.png';
import loginIcon from 'assets/img/login.png';
import signupIcon from 'assets/img/join.png';
import mypageIcon from 'assets/img/my.png';
import supportIcon from 'assets/img/service-center.png';
import searchIcon from 'assets/img/search.png';

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
                        <Link to="/"><img src={logo} alt="CGV 로고" /></Link>
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
                            <img src={searchIcon} alt="검색 아이콘" />
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
                    <img src={loginIcon} alt="로그인 아이콘" />
                    <span>로그인</span>
                </Link>
            </li>
            <li>
                <Link to="/signup">
                    <img src={signupIcon} alt="회원가입 아이콘" />
                    <span>회원가입</span>
                </Link>
            </li>
            <li>
                <Link to="/mypage">
                    <img src={mypageIcon} alt="마이페이지 아이콘" />
                    <span>MY CGV</span>
                </Link>
            </li>
            <li>
                <Link to="/support">
                    <img src={supportIcon} alt="고객센터 아이콘" />
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
