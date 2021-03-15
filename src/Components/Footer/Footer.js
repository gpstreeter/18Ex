import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className='footer-body'>
                <a
                className="App-link"
                href="https://www.amazon.co.uk/How-Have-Meaningful-Conversations-Strategies/dp/1786783134"
                target="_blank"
                rel="noopener noreferrer"
                >
                Buy the Book
                </a>
            </div>
        )
    }
}

export default Footer;