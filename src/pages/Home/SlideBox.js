import { useState } from 'react';

import BoxGroup from './BoxGroup';

const SlideBox = () => {
    const [page, setPage] = useState(0);

    const bodyStyle = getComputedStyle(document.body);
    const boxWidth = bodyStyle.getPropertyValue('--boxWidth').slice(0, -2) * 1;
    const boxSpace = bodyStyle.getPropertyValue('--boxSpace').slice(0, -2) * 1;
    const boxNum = bodyStyle.getPropertyValue('--boxNum');
    const boxGroupWidth = boxNum * (boxWidth + boxSpace);

    const movieCnt = 20;
    const totalPage = parseInt((movieCnt - 1) / 5);

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
                    <BoxGroup />
                    <BoxGroup />
                    <BoxGroup />
                    <BoxGroup />
                </div>
            </div>
            <div onClick={slideBoxLeft} id="movie-prev-btn" className={(0 < page) ? 'active' : ''}></div>
            <div onClick={slideBoxRight} id="movie-next-btn" className={(page < totalPage) ? 'active' : ''}></div>
        </section>
    );
};

export default SlideBox;
