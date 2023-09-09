import React from "react";

const Contact = () => {
  const data = [
    {
      img:"../../images/project-mockup-1.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/project-mockup-2.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    },
    {
      img:"../../images/project-mockup-3.png",
      title:"Lorem ipsum dolor sit amet, consectetur",
      shotDesc:`here are many variations of passages of 
      Lorem Ipsum available, but the majority 
      have suffered alteration in some form`
    }
  ]
  console.log(data);
  return (
    <div className="w-full about-session text-black pt-4">
      <div className="container mx-auto p-8">
        <div className="w-full">
          <p>CONTACT US</p>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-4/12">
            <p>
              64/66 Soi Cholprathan 10, Khan Klong Road, 
              Hua Hin, Hua Hin, Prachuap KhiriKhan 77110
              telephone : 09 3388 8515
            </p>
            <div className="w-full flex">
              <div className="w-3/12">Phone : </div>
              <div className="w-9/12">032 510025</div>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-3/12">Email : </div>
              <div className="w-9/12">panithan_ipk@hotmail.com</div>
              <div className="w-3/12"></div>
              <div className="w-9/12">tanawan91@tanawan91.co.th</div>
            </div>
            <div className="w-full">
              <div className="w-full mb-4">
                 <input className="w-full form-control-black" type="text" name="firstName" id="firstName" placeholder="First Name"/>
              </div>
              <div className="w-full mb-4">
                 <input className="w-full form-control-black" type="text" name="firstName" id="firstName" placeholder="Your Email"/>
              </div>
              <div className="w-full mb-4">
                 <input className="w-full form-control-black" type="text" name="firstName" id="firstName" placeholder="Moblie Number"/>
              </div>
              <div className="w-full mb-4">
                 <input className="w-full form-control-black" type="text" name="firstName" id="firstName" placeholder="How Can I Help You?"/>
              </div>
              <div className="w-full mb-4">
                 <input className="w-full form-control-black" type="text" name="firstName" id="firstName" placeholder="Your Massages"/>
              </div>
              <div className="w-full py-8">
                <a href="#" className="btn-light-default">Submit Now</a>
              </div>
            </div>
          </div>
          <div className="w-8/12 px-8">
            <img className="w-full" src="../../images/map-mockup.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;