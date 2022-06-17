import { Link } from 'react-router-dom';

import Layout from 'components/Layout';
import SlideBox from './SlideBox';

import './Home.css';

const Home = () => {
    return (
        <Layout>
            <main>
                <article>
                    <div className="container">
                        <header>
                            <h3>무비차트</h3>
                            <Link to="movie">전체보기</Link>
                        </header>
                        <SlideBox />
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export default Home;
