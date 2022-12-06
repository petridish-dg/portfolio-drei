import React from 'react';

const Footer = () => {
    return (
        <footer className="container grid" style={{alignItems: "flex-end"}}>
            <p>→ mail@peterdg.com</p>
            <ul>
                <li>→ Chat</li>
                <li>→ Instagram: Peter.DG</li>
            </ul>
            <p style={{ gridColumn: 'span 2', textAlign: 'right' }}>© Peter de Guzman 2022</p>
        </footer>
    );
};

export default Footer;
