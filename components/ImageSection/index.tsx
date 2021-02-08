import React, {
    Component, Fragment, useState, useEffect
} from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ImageSection.module.css';

interface ImageSectionProps {
    onPress?: any,
    img?: any,
    title?: any,
    desc?: any,
    url?: any
}

const ImageSection: React.FC<ImageSectionProps> = ({ img, title, desc, url }) => {
    const router = useRouter();

    const onClick = () => {
        console.log('Url: ', url);
        router.push(url);
    }

    return (
        <div className={styles.divMain} onClick={() => onClick()}>
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
    desc: "",
    url: ""
} as Partial<ImageSectionProps>


export default ImageSection;
