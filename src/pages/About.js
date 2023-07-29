import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our delectable pizza paradise! At our pizza website, 
        we take pride in crafting mouthwatering pizzas that are sure to 
        satisfy every pizza lover's cravings. Our diverse menu boasts an 
        array of scrumptious options to cater to every palate, from the 
        classic favorites like pepperoni and margherita to innovative 
        delights like pineapple pizza, vegan pizza, and even our signature 
        Briantech pizza. Each pizza is a masterpiece, prepared with the finest 
        ingredients and a sprinkle of passion. Our expert chefs ensure that every 
        slice is a symphony of flavors, delivering an unforgettable taste experience 
        with every bite. Whether you're a meat lover, a vegetarian, or a vegan, 
        we have something special just for you. Our pizzas are priced competitively, 
        offering great value for your taste buds and your wallet. So, come on in and 
        explore our menu. Treat yourself to a delightful pizza journey and indulge in 
        the goodness of our creations. Order now and let us bring the pizza magic to 
        your doorstep!
        </p>
      </div>
    </div>
  );
}

export default About;