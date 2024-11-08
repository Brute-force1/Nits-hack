import React from 'react';
import "./Tracking.css"
import kuvio from "../assests/Kuvio 1 Ruutuaika EN.svg"


const Box = ({ headerText, text }) => {
  return (
    <div className="box1">
      <h4>{headerText}</h4>
      <p>{text}</p>
    </div>
  );
};

const Trackingpage = () => {
  return (
    <>
        
        <div className="container1">
      <h2 className="heading1">Welcome Ella!</h2>
      <p className="subheading1">Your weekly summary</p>

      <div className="progress-container1">
        <div className='progress-bar-heading1'>
          <p className="progress-head1">You’re on track to meet your goal!</p>

          <p className='progress-head1'>6 hours</p>
        </div>
        <div className="progress-bar1">
          <div className="progress-fill1"></div>
        </div>
        <p className="status-text1">You have 15 hours left this week</p>
      </div>

      <div className="section1">
        <p className="section-heading1">Your screen time each day</p>
        {/* Screen time chart */}
        <div>
            <img src={kuvio} alt="" height={500}/>
        </div>
        {/* <MyChartComponent /> */}
      </div>

      <div className="section1">
        <h4 className="section-heading1">Your goals</h4>
        <div className="flex-container1">
          <Box headerText="Limit daily goals " text="Time to wake up" />
          <Box headerText="Limit daily goals " text="Time to wake up" />
        </div>
        <div className="center-align">
          <button className="button1">Review and adjust goals</button>
        </div>
      </div>

      <div className="section1">
        <h4 className="section-heading1">Your rewards</h4>
        <div className="flex-container1">
          <Box headerText="Limit daily goals " text="Time to wake up" />
          <Box headerText="Limit daily goals " text="Time to wake up" />
        </div>
        <div className="center-align1">
          <button className="button1">View all rewards</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Trackingpage;
