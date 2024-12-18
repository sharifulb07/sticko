import React from "react";
import Image from "next/image";
import Button from "../Button";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons"; // Correct import



const menu=[
    {
      id:1,
      title:"Features"
    },
  
    
    {
      id:2,
      title:"FAQs"
    },
  
    {
      id:3,
      title:"Pricing"
    },
  
    {
      id:4,
      title:"Support"
    },
    {
      id:5,
      title:"About Us"
    },
  
  
  
  ]

const Navbar=()=>{
    return (
        
    <nav className="flex justify-between items-center mr-100">

{/* button start */}
    <Button>
        <Image src={'./logo.svg' } width={100} height={50} />
        
       </Button>

       {/* button end */}

       {/* menu item start  */}
   
       <ul className="flex ">
   
   {menu.map((item)=>{
     return (
       <li id={item.id} className="px-3 cursor-pointer">
         {item.title}
       </li>
     )
   })}
   </ul>

   {/* menu item end  */}




<span className="flex justify-between items-center mr-100">
    <button className="">Log in</button>
    <button className="bg-blue-600 px-30 mr-200">
      
      Add to Chrome</button>
</span>


 


       </nav>
    )
}


export default Navbar;