import { Link } from 'react-router-dom';

import noneIcon from 'assets/img/grade-none.png';
import allIcon from 'assets/img/grade-all.png';
import twelveIcon from 'assets/img/grade-12.png';
import fifteenIcon from 'assets/img/grade-15.png';
import onlyAdultIcon from 'assets/img/grade-19.png';
import starIcon from 'assets/img/star.png';

const Box = () => {
    const ratingIcons = {
        NONE: noneIcon,
        ALL: allIcon,
        TWELVE: twelveIcon,
        FIFTEEN: fifteenIcon,
        ONLY_ADULT: onlyAdultIcon
    };

    return (
        <li>
            <div className="movie-poster">
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_1000.jpg" alt={'브로커 포스터'} />
                <img src={ratingIcons['TWELVE']} alt={'12세 이용가'} />
                <div>
                    <Link to="/">상세보기</Link>
                    <Link to="/">예매하기</Link>
                </div>
            </div>
            <div className="movie-info">
                <div>브로커</div>
                <div>
                    <div>
                        <img src={starIcon} alt="별" />
                        <span>{4.3}</span>
                    </div>
                    <div>예매율 {8.5}%</div>
                </div>
            </div>
        </li>
    );
};

export default Box;
