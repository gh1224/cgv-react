import { Link } from 'react-router-dom';

const Box = ({ movie }) => {
    const ratingIcons = {
        NONE: 'grade-none.png',
        ALL: 'grade-all.png',
        TWELVE: 'grade-12.png',
        FIFTEEN: 'grade-15.png',
        ONLY_ADULT: 'grade-19.png'
    };

    const ratingAlts = {
        NONE: '미정',
        ALL: '전체 이용가',
        TWELVE: '12세 이용가',
        FIFTEEN: '15세 이용가',
        ONLY_ADULT: '19세 이용가'
    };

    return (
        <li>
            <div className="movie-poster">
                <img src={movie.posterUrl} alt={movie.title + ' 포스터'} />
                <img src={process.env.PUBLIC_URL + '/grade/' + ratingIcons[movie.rating]} alt={ratingAlts[movie.rating]} />
                <div>
                    <Link to={'/movie/detail?id=' + movie.id}>상세보기</Link>
                    <Link to="/">예매하기</Link>
                </div>
            </div>
            <div className="movie-info">
                <div>{movie.title}</div>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/star.png'} alt="별" />
                        <span>{movie.reviewStarAvg.toFixed(1)}</span>
                    </div>
                    <div>예매율 {(movie.ticketRatio * 100).toFixed(1)}%</div>
                </div>
            </div>
        </li>
    );
};

export default Box;
