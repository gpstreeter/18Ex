import React from  'react';
import './Homepage.css'
import Quotes from '../../Images/Daco_4284074.png'
import Sarah from '../../Images/Sarah.jpg'


class Homepage extends React.Component {
    render() {
        return (
            <div className='body'>
                <div className="title">
                    <img className='img1' src={Quotes} alt=''/>
                        <div className="title-content">
                            <p className='title-text'>How to Have</p>
                            <p className='title-text'>Meaningful</p>
                            <p className='title-text'>Conversations</p>
                        </div>
                    <img className='img2' src={Quotes} alt=''/>
                </div>


                <content className="intro">
                    <p className="intro-content">
                    This is a passion projected that was created after I read the book how to have meaningful conversations by Sarah Rozenthuler. This booked help me massively overcome some barrieres that I was having in my personal life and I felt like in this digital age it would be benifical to have a tool that would allow me to complete these exercises online.
                    </p>
                    <p className="intro-content">
                    This is a tool that is a collection of the exercises provided by Sarah at the back of the book. They are designed with ease in mind and can be saved to your device  after complition so that they can be revisited when needed.
                    </p>
                    <p className="intro-content">
                    This website would not exsist without all of the hard work done by Sarah so all my thanks gose to her. Also the design of these exercises only truely show there benifit when the understanding of how and when to use them is present. So I strongly advise that you read the book before proceeding any further. A link to somewhere that you can purchase the book is provided below.
                    </p>

                    <div className="quote">
                    <img className='img3' src={Quotes} alt=''/>
                        <p className='quote-content'>
                            Meaningful conversation is the single most effective way to bring about real change and growth in your life.
                        </p>
                    <img className='img4' src={Quotes} alt=''/>
                    </div>
                </content>

                <div className="about">
                    <p className="about-content">
                        Speech is our key tool for moving forward in every aspect of life. Yet, how often do you feel you’ve missed an opportunity or failed to epress what mattered most to you? Whether you need to talk with your partner about a relationship proplem or to your boss about your career, this website along with “How to have Meaningful Conversations” will give you the know-how to achieve those goals. 
                    </p>
                    <p className="about-content">
                        I cannot itterate this enought that this website is very pointless on its own. You must have an understanding on how to apply the exercises found in “How to Have Meaningful Conversations”. I urge you if you feeling like these concepts are something that would help you in your life to go out and purchase the book and then come back to this when you are ready.
                    </p>
                </div>
                
                <div className="author">
                    <img className="author-img" src={Sarah} alt=""/>
                        <div className="author-content">
                            <div className="author-title">
                                <img className='img5' src={Quotes} alt=''/>
                                <p className="author-title-text">About the Author</p>
                                <img className='img6' src={Quotes} alt=''/>
                            </div>
                            
                            <p className="intro intro-content">
                                Sarah Rozenhuler is a leadership consultant, coach and author with over 15 years’ experiecnce working internationally. She has been a chartered phsycologist since 2003 and is the founder of Bridgework Consulting Ltd. Long-term clients include Associated British Food, BP, Spencer Stuart and Standard Chartered Bank. With extensive expertise in leadership and team development, Sarah coaches CEOs and leaders to have the conversations that matter most.
                            </p>
                        </div>
                    </div>

                    <div className="reviews">
                        <div className="quotes">
                            <img className='img7' src={Quotes} alt=''/>
                            <p className="quotes-content">
                            “There are very few moments that we recall as truly significant shifts in our lives. These often if not always come through conversation. Read this book and understand why - a powerfull guide  to genuine growth and change.”
                            </p>
                            <img className='img8' src={Quotes} alt=''/>
                            <p className="quotes-reference">William Isaacs, authour of Dialog and the Art of Thinking Together and Senior Lecturer at MIT Sloan School of Management</p>
                        </div>
                        <div className="quotes">
                            <img className='img7' src={Quotes} alt=''/>
                            <p className="quotes-content">
                            “Conversation is key to enhancing our relationships. This book gives you powerful tools so you can have heart-to-heart interactions that will be make your relationships more rich, fulfilling nd transfirmative.”
                            </p>
                            <img className='img8' src={Quotes} alt=''/>
                            <p className="quotes-reference">Marci Shimoff, New York  Times Bestselling Author of Love for No Reason  and Happy for No Reason, and featured teacher in The Secret </p>
                        </div>
                    </div>
                </div>


        )

    }
}


export default Homepage;