import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="st-copyright-wrap text-center">
                    <div className="st-copyright-text">© {`"${new Date().getFullYear()}."`} Designed by Pankaj Kumar. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

