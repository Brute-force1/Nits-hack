import React from 'react'
import bodyimg from '../assets/bodyImg3.jpg.png'
import cardImg from '../assets/bodyimage1.jpg'
import './HomeBody.css';
const HomeBody = () => {
  return (
    <div>
     <div className='container'> 
        <img src={bodyimg}/>
        {/* <h2>Welcome to Our Website.</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit perspiciatis, fuga quibusdam ducimus ipsam maxime obcaecati, suscipit rem delectus minima, blanditiis mollitia officiis voluptate cum tempora necessitatibus eius ipsa nihil?</p> */}
        </div>
     <div className='Cards'>
        <h1>Why we need App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, libero placeat consectetur dolores aspernatur illum vitae ipsa maiores impedit qui aliquam expedita quas inventore obcaecati dolorem rem itaque numquam quasi.
        </p>
       <div className='Card-img'> <figcaption><img src={cardImg} /><caption>Too much screen time may lead to Obesity</caption></figcaption>
        <figcaption><img src={cardImg} /><caption>Too much screen time may lead to Obesity</caption></figcaption>
        <figcaption><img src={cardImg} /><caption>Too much screen time may lead to sleep disturbances</caption></figcaption>
        </div>
     </div>
    </div>
  )
}

export default HomeBody
