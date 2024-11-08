import React from 'react';
import './Reward.css'; // Import the CSS file
import art from "../assests/art.png"
import front from "../assests/front.png"
import dance from "../assests/dance.png"
import kitchen from "../assests/kitchen.png"
import puzzle from "../assests/puzzle.png"
import book from "../assests/book.png"
import science from "../assests/science.png"
import yoga from "../assests/yoga.png"
import walk from "../assests/walk.png"

const ActivityCard = ({ imgSrc, title, description }) => {
    return (
        <div className="activity-card">
            <img src={imgSrc} alt="Activity" />
            <div className="activity1">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Reward = () => {
    return (
        <div className='reward-boxx'>
            <h1>You've earned a badge!</h1>
            <p>Keep it up! You've great steps to be healthy and mindful with your device</p>
            <div className="reward">
                <img src={front} alt="Reward" />
                <div className="reward_txt">
                    <h2>Great job!</h2>
                    <p>You've completed the first step of our Digital Detox Challenges</p>
                </div>
            </div>

            <div className="div2">
                <div className="div2_1">
                    <h2>Stay active</h2>
                    <p>Try these activities to stay healthy and keep your mind sharp</p>
                </div>
                <button className="btn">View activities</button>
            </div>

            <div className="div3">
                <ActivityCard 
                    imgSrc={dance} 
                    title="Dance" 
                    description="Turn on your favourite tunes and dance like no one's watching." 
                />
                <ActivityCard 
                    imgSrc={kitchen}
                    title="Cooking" 
                    description="Turn on your favourite tunes and cook up something delicious." 
                />
                <ActivityCard 
                    imgSrc={walk} 
                    title="Walk" 
                    description="Take a walk outside to refresh your mind and body." 
                />
                <ActivityCard 
                    imgSrc={yoga} 
                    title="Yoga" 
                    description="Stretch, breathe, and find your inner peace." 
                />
                <ActivityCard 
                    imgSrc={puzzle} 
                    title="Puzzle" 
                    description="Challenge your mind with a fun puzzle." 
                />
                <ActivityCard 
                    imgSrc={art} 
                    title="Art" 
                    description="Express yourself with some creative artwork." 
                />
                <ActivityCard 
                    imgSrc={science} 
                    title="Science Activity" 
                    description="Explore fun and engaging science experiments." 
                />
                <ActivityCard 
                    imgSrc={book} 
                    title="Book reading" 
                    description="Get lost in a good book." 
                />
            </div>
        </div>
    );
};

export default Reward;