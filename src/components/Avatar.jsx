import PropTypes from 'prop-types';

function Avatar({img, alt}) {
    return <div className='avatar'>
        <div className="mb-6 rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={alt} />
        </div>
    </div>;
}

export default Avatar;

Avatar.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string
}

Avatar.defaultProps = {
    alt: 'avatar'
}