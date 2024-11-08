import React from 'react';
import "./Tracking.css"
import kuvio from "../assests/Kuvio 1 Ruutuaika EN.svg"
import DashboardHeader from '../components/DashboardHeader';

const Box = ({ headerText, text }) => {
  return (
    <div className="box">
      <h4>{headerText}</h4>
      <p>{text}</p>
    </div>
  );
};

const Trackingpage = () => {
  return (
    <>
        <DashboardHeader />
        
        <div className="container">
      <h2 className="heading">Welcome Ella!</h2>
      <p className="subheading">Your weekly summary</p>

      <div className="progress-container">
        <div className='progress-bar-heading'>
          <p className="progress-head">You’re on track to meet your goal!</p>

          <p className='progress-head'>6 hours</p>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p className="status-text">You have 15 hours left this week</p>
      </div>

      <div className="section">
        <p className="section-heading">Your screen time each day</p>
        {/* Screen time chart */}
        <div>
            <img src={kuvio} alt="" height={500}/>
        </div>
        {/* <MyChartComponent /> */}
      </div>

      <div className="section">
        <h4 className="section-heading">Your goals</h4>
        <div className="flex-container">
          <Box headerText="Limit daily goals " text="Time to wake up" />
          <Box headerText="Limit daily goals " text="Time to wake up" />
        </div>
        <div className="center-align">
          <button className="button">Review and adjust goals</button>
        </div>
      </div>

      <div className="section">
        <h4 className="section-heading">Your rewards</h4>
        <div className="flex-container">
          <Box headerText="Limit daily goals " text="Time to wake up" />
          <Box headerText="Limit daily goals " text="Time to wake up" />
        </div>
        <div className="center-align">
          <button className="button">View all rewards</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Trackingpage;
