import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'services/axios';
import Layout from 'components/Layout';

const Login = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    let redirectUrl = searchParams.get('redirectUrl');
    if (!redirectUrl) {
        redirectUrl = '/';
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/session', {
                username: username,
                pwd: pwd
            });
            navigate(redirectUrl);
        } catch (error) {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <Layout>
            <main>
                <article>
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" value={username} onChange={handleUsernameChange} />
                        <input type="password" name={pwd} onChange={handlePwdChange} />
                        <button type="submit">로그인</button>
                    </form>
                </article>
            </main>
        </Layout>
    );
};

export default Login;
