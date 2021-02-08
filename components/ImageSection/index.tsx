import React, {
    Component, Fragment, useState, useEffect
} from 'react';
import styles from '../../styles/ImageSection.module.css';

interface ImageSectionProps {
    onPress?: any,
    img?: any,
    title?: any,
    desc?: any
}

const ImageSection: React.FC<ImageSectionProps> = ({ img, title, desc }) => {

    return (
        <div className={styles.divMain}>
            <div className={styles.divImage}>
                {img != "" ?
                    <img src={img} className={styles.image} />
                    : null}
            </div>
            <div className={styles.divTitle}>
                <h1>{title}</h1>
                <h4>{desc}</h4>
            </div>
        </div>
    );
};

ImageSection.defaultProps = {
    img: "",
    title: "",
    desc: ""
} as Partial<ImageSectionProps>


export default ImageSection;
