import Box from './Box';

const BoxGroup = ({ movieList }) => {
    return (
        <ul>
            {movieList.map((movie, idx) =>
                <Box key={idx} movie={movie} />
            )}
        </ul>
    );
};

export default BoxGroup;
