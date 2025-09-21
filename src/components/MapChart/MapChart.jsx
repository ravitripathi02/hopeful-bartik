import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";


const locations = [
  { city: "New York", value: 72, coords: [-74.006, 40.7128] },
  { city: "San Francisco", value: 39, coords: [-122.4194, 37.7749] },
  { city: "Sydney", value: 25, coords: [151.2093, -33.8688] },
  { city: "Singapore", value: 61, coords: [103.8198, 1.3521] },
];

const max = Math.max(...locations.map(l => l.value));

function MapChart() {
  return (
    <div style={{
      // background: "#F7F9FB",
      borderRadius: "16px",
      padding: "1.5rem",
      width: "260px",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ fontWeight: 600, fontSize: "16px", marginBottom: "1rem" }}>Revenue by Location</div>
      <div style={{ width: "100%", height: "120px", marginBottom: "1rem" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 40 }}
          width={260}
          height={120}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E3F5FF"
                  stroke="#fff"
                  style={{ outline: "none" }}
                />
              ))
            }
          </Geographies>
          {locations.map((loc) => (
            <Marker key={loc.city} coordinates={loc.coords}>
              <circle r={4} fill="#222" stroke="#fff" strokeWidth={1.5} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
      {locations.map((item) => (
        <div key={item.city} style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 500 }}>
            <span>{item.city}</span>
            <span>{item.value}K</span>
          </div>
          <div style={{
            height: "3px",
            background: "#CFE3F7",
            borderRadius: "2px",
            width: `${(item.value / max) * 100}%`
          }} />
        </div>
      ))}
    </div>
  );
}

export default MapChart;