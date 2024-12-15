import React from 'react';
import './ContactPageSocialCard.css';

const ContactPageSocialCard = () => {
    return (
        <div className="ContactPageSocialCard-card">
            {/* Instagram
            <a className="ContactPageSocialCard-socialContainer ContactPageSocialCard-instagram" href="#">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="ContactPageSocialCard-socialSvg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.348 3.608 1.322.975.975 1.26 2.242 1.322 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.348 2.633-1.322 3.608-.975.975-2.242 1.26-3.608 1.322-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.348-3.608-1.322-.975-.975-1.26-2.242-1.322-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.348-2.633 1.322-3.608.975-.975 2.242-1.26 3.608-1.322C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.07 5.772.128 4.515.343 3.364 1.493 2.213 2.644 1.998 3.901 1.94 5.181.882 6.46.87 6.864.87 12s.012 5.54.07 6.819c.058 1.28.273 2.537 1.424 3.688 1.15 1.151 2.407 1.366 3.688 1.424 1.28.058 1.684.07 6.818.07s5.54-.012 6.819-.07c1.28-.058 2.537-.273 3.688-1.424 1.151-1.151 1.366-2.407 1.424-3.688.058-1.28.07-1.684.07-6.818s-.012-5.54-.07-6.819c-.058-1.28-.273-2.537-1.424-3.688-1.151-1.15-2.408-1.365-3.688-1.424C15.54.012 15.136 0 12 0z" />
                </svg>

            </a> */}

          
            <a className="ContactPageSocialCard-socialContainer ContactPageSocialCard-facebook" href="https://github.com/jipanali">
                <svg viewBox="0 0 16 16" className="ContactPageSocialCard-socialSvg">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.59 7.59 0 0 1 2-.27c.68.003 1.36.093 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>


            </a>

            {/* Twitter */}
            <a className="ContactPageSocialCard-socialContainer ContactPageSocialCard-twitter" href="https://x.com/JipanAli?t=nGdyNLR3kUH5funUWETr2w&s=08">

                <svg viewBox="0 0 16 16" className="ContactPageSocialCard-socialSvg">
                    <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    ></path>
                </svg>
            </a>

            {/* LinkedIn */}
            <a className="ContactPageSocialCard-socialContainer ContactPageSocialCard-linkedin" href="https://www.linkedin.com/in/jipanali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">

                <svg viewBox="0 0 448 512" className="ContactPageSocialCard-socialSvg">
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                </svg>
            </a>
        </div>
    );
};

export default ContactPageSocialCard;
