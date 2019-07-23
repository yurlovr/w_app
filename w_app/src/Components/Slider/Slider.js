import React from "react";
import {Carousel} from "react-bootstrap";
import "./slider.scss";


export default function Slider () {
   return (
     <Carousel>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src="./images/2c2a6588-7dc8-403b-b221-80ffc688bf0d.jpg"
           alt="First slide"
         />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src="./images/0ffbdb30-9d8d-45b3-86c9-a09a06112845.jpg"
           alt="Third slide"
         />

         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src="./images/20fe4174-1b13-4512-826f-0cdb6364f130.jpg"
           alt="Third slide"
         />

         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
   )
}