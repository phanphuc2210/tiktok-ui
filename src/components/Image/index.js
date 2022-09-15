import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, className, fallback = images.noImage, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(fallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
