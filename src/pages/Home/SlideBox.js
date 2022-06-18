import { useState, useEffect } from 'react';
import { getTwentyMovies } from 'services/movies';

import BoxGroup from './BoxGroup';

const SlideBox = () => {
    const [page, setPage] = useState(0);
    const [movieList, setMovieList] = useState([]);

    const fetchData = async () => {
        setMovieList(await getTwentyMovies());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const bodyStyle = getComputedStyle(document.body);
    const boxWidth = bodyStyle.getPropertyValue('--boxWidth').slice(0, -2) * 1;
    const boxSpace = bodyStyle.getPropertyValue('--boxSpace').slice(0, -2) * 1;
    const boxNum = bodyStyle.getPropertyValue('--boxNum') * 1;
    const boxGroupWidth = boxNum * (boxWidth + boxSpace);

    const totalPage = parseInt((movieList.length - 1) / boxNum);

    const slideBoxLeft = () => {
        setPage(page - 1);
    };

    const slideBoxRight = () => {
        setPage(page + 1);
    };

    return (
        <section>
            <div id="poster-box">
                <div style={{ marginLeft: -1 * page * boxGroupWidth + 'px' }}>
                    <BoxGroupList movieList={movieList} chunkSize={boxNum} />
                </div>
            </div>
            <div onClick={slideBoxLeft} id="movie-prev-btn" className={(0 < page) ? 'active' : ''}></div>
            <div onClick={slideBoxRight} id="movie-next-btn" className={(page < totalPage) ? 'active' : ''}></div>
        </section>
    );
};

const BoxGroupList = ({ movieList, chunkSize }) => {
    const chunkedList = [];
    const len = movieList.length;
    for (let i = 0; i < len; i += chunkSize) {
        const end = (i + chunkSize) < len ? (i + chunkSize) : len;
        chunkedList.push(movieList.slice(i, end));
    }

    return chunkedList.map((chunk, idx) =>
        <BoxGroup key={idx} movieList={chunk} />
    );
};

export default SlideBox;
