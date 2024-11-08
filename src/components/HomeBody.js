import React from "react";
import bodyimg from "../assets/bodyImg3.jpg.png";
import cardimg1 from "../assets/bodyImg2.jpg";
import cardimg2 from "../assets/bodyImg1.jpg";
import cardImg3 from "../assets/bodyimage1.jpg";
import "./HomeBody.css";
const HomeBody = () => {
  return (
    <div>
      <div className="Container">
        <img src={bodyimg} />
        <div>
          <h2>Welcome to Our Website!</h2>
          <p>
            Fun and interactive lessons for kids on how to balance screen time
            and live a healthy lifestyle. Powered by Al and guided by the wisdom
            of the ancient wizards
          </p>
        </div>
      </div>
      <div className="Cards">
        <h1>Why we need App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          libero placeat consectetur dolores aspernatur illum vitae ipsa maiores
          impedit qui aliquam expedita quas inventore obcaecati dolorem rem
          itaque numquam quasi.
        </p>
        <div className="Card-img">
          <figcaption>
            <img src={cardImg3} />
            <caption>Too much screen time may disturb mental health</caption>
          </figcaption>
          <figcaption>
            <img src={cardimg1} />
            <caption>Too much screen time may lead to Obesity</caption>
          </figcaption>
          <figcaption>
            <img src={cardimg2} />
            <caption>
              Too much screen time may lead to sleep disturbances
            </caption>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
