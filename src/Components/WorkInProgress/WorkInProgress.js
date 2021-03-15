import React from  'react';
import './WorkInProgress.css'
import Quotes from '../../Images/Quoations.jpg'
import Social from '../../Images/social-media-icons.png';


class WorkInProgress extends React.Component {
    render() {
        return (
            <div className='body'>
                <img className='quotes' src={Quotes} alt=''/>
                    <div>
                        {console.log('I did render this page')}
                        <p className='title'>How Do I</p>
                        <p className='title'>Get This</p>
                        <p className='title'>To Work</p>
                    </div>
                <img className='quotes' src={Quotes} alt=''/>
                <img className='quotes' src={Social} alt=''/>
            </div>
        )

    }
}


export default WorkInProgress