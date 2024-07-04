
import React from 'react';
import bookgif from '../assets/Images/bookgif-ezgif.com-gif-maker.gif'
// import bookgif from '../assets/Images/pre-unscreen.gif'
export default function BookPreloader() {
    return (
        <div className='book-preloader'>
            <div className="book">
				<img src={bookgif} alt="" />
            </div>
        </div>
    );
}
