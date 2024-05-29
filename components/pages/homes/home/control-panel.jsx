import * as React from "react";
const CITIES = [
  {
    city: "Hong Kong",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state: "yes",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    city: "Tianjin(China)",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state: "yes",
    latitude: 39.0851,
    longitude: 117.1994,
  },
  {
    city: "Dessau Roßlau(Germany)",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state: "yes",
    latitude: 51.8428,
    longitude: 12.2304,
  },
  {
    city: "London",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    state: "yes",
    latitude: 51.5072,
    longitude: -0.1015987,
  },
];
function ControlPanel(props) {
  return (
    <div className="control-panel">
      <h6>Our Locations of Work</h6>
      {CITIES.filter((city) => city.state === "yes").map((city, index) => (
        <div key={`btn-${index}`} className="input control-panel-input">
          <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === "Hong Kong"}
            onClick={() => props.onSelectCity(city)}
          />
          <span class="checkmark"></span>
          <label htmlFor={`city-${index}`}>{city.city}</label>
        </div>
      ))}
    </div>
  );
}

export default React.memo(ControlPanel);
