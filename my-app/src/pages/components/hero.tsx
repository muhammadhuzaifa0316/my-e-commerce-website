import React from "react";

export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="heroImage">
       <img src="../hero-home.png" alt="veiv" />
        <div className="heroText bg-[#FFF3E3]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className=" buyBtn">BUY NOW</button>
        </div>
      </div>
   
    <div>
                 <h1 className="font-bold text-center">Browse The Range</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="group shadaw-md bg-netural-100 w-{1183px} h-{600px} flex justify-center space-x-8  items-center ">
                
            <img src="../1-pic.png" alt="pic-1" />
            <h6>Dining</h6>
            
            
            <img src="../living-room.png" alt="living-room"/>
            <h6>Living</h6>

            <img src="../mask-pic.png" alt="mask-pic"/>
            <h6>Bed Room</h6>


            

            </div>
            
            </>


  );
}
            






