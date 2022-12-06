import React from 'react';

import s from '/styles/pages/Home.module.css';

const Home = () => {
    return (
        <section className={s.heroSection}>
            <div className={s.heroHeading}>
                <h1>
                    <span className={s.heroHeadingLine}>
                        <span className={s.heroSpan}>PETER</span>
                        <span className={s.heroSpan}>DE</span>
                        <span className={s.heroSpan}>GUZMAN</span>
                    </span>
                    <span className={s.heroHeadingLine}>
                        <span className={s.heroSpan}>DESIGN</span>
                        <span className={s.heroSpan}>&</span>
                    </span>
                    <span className={s.heroHeadingLine}>
                        <span className={s.heroSpan}>ART</span>
                        <span className={s.heroSpan}>DIRECTION</span>
                    </span>
                    <span className={s.heroHeadingLine}>
                        <span className={s.heroSpan}>⌖</span>
                        <span className={s.heroSpan}>CHICAGO,</span>
                        <span className={s.heroSpan}>ILLINOIS</span>
                    </span>
                </h1>
            </div>
        </section>
    );
};

export default Home;
