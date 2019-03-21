import React from "react";



const Travel = ({destination, country, photo, distance }) => (
  <section>
    <div>
      <h1><strong>{destination}</strong></h1>
      <h3><em>{country}</em></h3>
      <p><small>{distance}</small></p>
    </div>
    <img src={photo} alt={country} />
  </section>
 

);

export default Travel;