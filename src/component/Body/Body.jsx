import React from 'react'
import "./Body.scss"
import Clock from '../Clock/Clock'
import { useEffect,useState } from 'react'


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

<div className="col-3 item-6"><div className='item-5'>{timeLeft.days}</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.hours}</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.minutes}</div></div>
<div className="col-3"><div className='item-5'>{timeLeft.seconds}</div></div>
</div> 

  )
}

export default function Body() {
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
 
  return (
    <div className='container'>
        <>
  {/* Carousel wrapper */}
  <div
    id="carouselBasicExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner">
      {/* Single item */}
      <div className="carousel-item active position-relative">
        <img 
          src="./images/slider_1.jpg"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className=" item-10">
        <h5 className='fs-6'>SPRING / SOMER COLLECTION 2017</h5>
          <p className='fs-3 fw-bold'>GET UP TO 30% OFF 
            NEWARRIVAL
          </p>
          
          <button type="button" class="btn btn-danger">SHOP NOW</button>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item active position-relative">
        <img 
          src="./images/slider_2.jpg"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className=" item-10">
          <h5 className='fs-6 '>SPRING / SOMER COLLECTION 2017</h5>
          <p className='fs-3 fw-bold'>GET UP TO 30% OFF 
            NEWARRIVAL
          </p>
          <button type="button" class="btn btn-danger">SHOP NOW</button>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item active position-relative">
        <img 
          src="./images/slider_3.jpg"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className=" item-10">
          <h5 className='fs-6'>SPRING / SOMER COLLECTION 2017</h5>
          <p className='fs-3 fw-bold'>GET UP TO 30% OFF 
            NEWARRIVAL
          </p>
          <button type="button" class="btn btn-danger">SHOP NOW</button>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
</>
<div className="container mb-5">
<div className="row mt-5">
    <div className="col-md-4">
    <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="./images/banner_1.jpg"
      className="img-fluid w-100 h-100 item-11"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
    <a href="#!" className="position-absolute top-50 start-50 translate-middle bg-white item-9">
      WOMEN'S
    </a>
  </div>

</div>

    </div>
    <div className="col-md-4">
    <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="./images/banner_2.jpg"
      className="img-fluid w-100 h-100 item-11"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
    <a href="#!" className="position-absolute top-50 start-50 translate-middle bg-white item-9">
      ACCESSORIES'S
    </a>
  </div>

</div>

    </div>
    <div className="col-md-4">
    <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="./images/banner_3.jpg"
      className="img-fluid w-100 h-100 item-11"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
    <a href="#!" className="position-absolute top-50 start-50 translate-middle bg-white item-9">
      MEN'S
    </a>
  </div>

</div>

    </div>

</div>
</div>

<div className="row mt-4 mb-4">
    <div className="col-md-3 bg-secondary item-1 ">
        <div className="row item-2">
            <div className="col-md-2 text-danger fs-3">
                <div className="pt-3">
                <i class="fa-solid fa-car-side"></i>
                </div>
                </div>

            <div className="col-md-10">
                <div className="fs-5 fw-bold">FREE SHIPPING</div>
                <div className="fs-6">Suffered Attenration In Some Form</div>
            </div>
        </div>
    </div>
    <div className="col-md-3 bg-secondary item-1 ">
        <div className="row item-2">
            <div className="col-md-2 text-danger fs-3">
                <div className="pt-3">
                <i class="fa-regular fa-money-bill-1"></i>
                </div>
                </div>

            <div className="col-md-10">
                <div className="fs-5 fw-bold">CACH ON DELYVERY</div>
                <div className="fs-6">The Internet Tend To Repeat</div>
            </div>
        </div>
    </div>
    <div className="col-md-3 bg-secondary item-1 ">
        <div className="row item-2">
            <div className="col-md-2 text-danger fs-3">
                <div className="pt-3">
                <i class="fa-solid fa-rotate-left"></i>
                </div>
                </div>

            <div className="col-md-10">
                <div className="fs-5 fw-bold">45 DAY RETURN</div>
                <div className="fs-6">Making This Look Like Readable</div>
            </div>
        </div>
    </div>
    <div className="col-md-3 bg-secondary item-1 ">
        <div className="row item-2">
            <div className="col-md-2 text-danger fs-3">
                <div className="pt-3">
                <i class="fa-regular fa-clock"></i>
                </div>
                </div>

            <div className="col-md-10">
                <div className="fs-5 fw-bold">OPEN ALL WEEK</div>
                <div className="fs-6">9AM-9PM</div>
            </div>
        </div>
    </div>

</div>


<div className="row item-3">
    <div className="col-md-6">
    <img src="./images/deal_ofthe_week.png" class="img-fluid" alt="Wild Landscape" />
    </div>
    <div className="col-md-6 item-4">
        <div className=" d-flex justify-content-center align-items-center flex-column">
            <div className="">
        <div className=" d-flex justify-content-center fs-6 mb-0 fw-100"><div  className=" item-13">Deal Of The Week</div></div>
        <div className=" d-flex justify-content-center mt-0 text-danger fw-10"><div  className=" item-13">_________</div></div>
        <div className="  d-flex justify-content-center mt-5">
            <div className="row">

                <div className="col-3 item-6">
                  <div className='item-5'>

                    <div className='item-12'>{timeLeft.days>9?timeLeft.days:"0"+timeLeft.days}</div>
                    <div className='item-7'>Day</div>
                 
                  </div>
                  </div>

                <div className="col-3">
                  <div className='item-5'>
                <div className='f item-12'>{timeLeft.hours>9?timeLeft.hours:"0"+timeLeft.hours}</div>
                    <div className='  item-7'>Hours</div>
                </div ></div>

                <div className="col-3">
                  <div className='item-5'>
                <div className='item-12'>{timeLeft.minutes>9?timeLeft.minutes:"0"+timeLeft.minutes}</div>
                    <div className='  item-7'>Min</div>
                </div></div>


                <div className="col-3">
                  <div className='item-5'>
                <div className=' item-12'>{timeLeft.seconds>9?timeLeft.seconds:"0"+timeLeft.seconds}</div>
                    <div className='  item-7'>Sec</div>
                </div></div>


            </div>
        </div>
        <div className=" d-flex justify-content-center mt-5 "><button type="button" className="btn btn-dark">Shop Now</button></div>
        </div>
        </div>

    </div>
</div>


    </div>
  )
}
