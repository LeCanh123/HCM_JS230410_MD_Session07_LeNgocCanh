import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Body from '../Body/Body.scss';

const CountDownTimer = () => {
  // Đặt ngày giờ kết thúc đếm ngược
  const endDate = new Date('2023-06-30T00:00:00').getTime();

  // Tạo state để lưu số ngày giờ phút giây còn lại
  const [timeLeft, setTimeLeft] = useState({});

  // Tính toán số ngày giờ phút giây còn lại sau mỗi lần render
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate - new Date().getTime();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(timeLeft);
    };

    calculateTimeLeft();
    setInterval(calculateTimeLeft, 1000);
  }, []);

  // Render component Countdown với endDate đã được đặt trước và timeLeft đã được tính toán
  return (
    // <div>
    //   {/* <Countdown date={endDate} daysInHours={true} /> */}
    //   <div>{timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds</div>
    // </div>

 <div>
    <div className="Time">

 </div>

<div className="col-3 item-6"><div className='item-5'>
<div>{timeLeft.days}</div>
<div>Hours</div>
</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.hours}</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.minutes}</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.seconds}</div></div>
</div> 

  )
}






























        
        
      