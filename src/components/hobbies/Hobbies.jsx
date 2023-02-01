import React from 'react';
import { img } from "../../assets";


const Card = ({ image, text }) => (
  <div className="card">
    <img src={image} alt="" />
    <p>{text}</p>
  </div>
);

const Hobbies = () => (
  <div className="card-container">
    <Card
      image={img.skydive}
      text="I have been practicing skydiving since 2015, and through this sport, I have learned the importance of speed, objectivity, composure, and discernment in decision making. I have also discovered that safety is directly related to information and that I am able to handle pressure well. Furthermore, I have learned the importance of following briefs for the success of jumps, especially in group jumps."
    />
    <Card
      image={img.senderismo}
      text="I come from a family that has always encouraged contact with nature, and since I was a child I have accompanied my father on long stretches of walks, either by the sea, in a forest, or in more arid and deserted places. With these experiences, I learned to be resilient, resistant, persistent and, above all, to be always attentive to the present moment. 'Watch where you step, step where you look'"
    />
    <Card
      image={img.scuba}
      text="It fascinates me to think that more than 70% of the earth's surface is water. So, driven by curiosity, I became a diver and was able to develop some important skills such as: communicating effectively and assertively (only by means of signs), as well as having discipline and focus (getting to enjoy moments of intense and pleasurable, underwater meditation)"
    />
  </div>
);


export default Hobbies;

