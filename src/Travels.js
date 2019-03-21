import React from "react";
import Travel from "./Travel";


const travels=[
{
  destination:"Asia", 
  country:"China", 
  photo:"https://www.fourseasons.com/content/dam/fourseasons/images/web/BEJ/BEJ_1096_aspect16x9.jpg", 
  distance:"~ too far away by car. a 13h flight ~" 
},
{
  destination:"America", 
  country:"Chile", 
  photo:"https://i.gocollette.com/img/destination-page/south-america/chile/chile-ms3.jpg?h=720&w=1280&la=en", 
  distance:"~ unreachable by car. airplane only. or boat ~" 
},
{
  destination:"Europe", 
  country:"Romania", 
  photo:"https://i.ytimg.com/vi/UHRcQmQ_hK0/maxresdefault.jpg", 
  distance:"~ approx 3000 km by car. or about a 2h flight ~" 
},
{
  destination:"Africa", 
  country:"South Africa", 
  photo:"https://d1w9csuen3k837.cloudfront.net/Pictures/1280x720/6/0/8/133608_African-safari-sunset-with-silhouette_GettyImages-532389864_credit-iStock_Getty-Images---Hero.jpg", 
  distance:"~ unreachable by car. airplane only. or boat ~" 
},
{
  destination:"Oceania", 
  country:"Thailand", 
  photo:"https://www.rei.com/adventures/assets/adventures/images/trip/core/asia/fta_hero", 
  distance:"~ too far away by car. a 15h flight ~" 
}
];

const Travels = () => (
  <div>
    {travels.map(destination => (
      <Travel destination={destination.destination} country={destination.country} photo={destination.photo} distance={destination.distance} />
    ))}
  </div>
);



export default Travels;