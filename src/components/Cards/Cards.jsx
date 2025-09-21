import Styles from "./Cards.module.css";
import Inc from "../../assets/images/Inc.svg";
import Dec from "../../assets/images/Dec.svg";
function Cards({ darkMode }) {
  const data = [
    {
      title: "Customers",
      value: "3,781",
      growth: "+11.01%",
      bg: "var(--customer-card-bg)",
      color: "var(--rev-text-color)",
    },
    {
      title: "Orders",
      value: "1,219",
      growth: "-0.03%",
      bg: "var(--orders-card-bg)",
      color: "var(--text-color)",
    },
    {
      title: "Revenue",
      value: "$695",
      growth: "+15.03%",
      bg: "var(--revenue-card-bg)",
      color: "var(--text-color)",
    },
    {
      title: "Growth",
      value: "30.1%",
      growth: "+6.08%",
      bg: "var(--products-card-bg)",
      color: "var(--rev-text-color)",
    },
  ];

  return (
    <div className={Styles.grid}>
      {data.map((item, index) => (
        <div
          key={index}
          className={Styles.container}
          style={{ background: item.bg, color: item.color }}
        >
          <div>{item.title}</div>
          <div className={Styles.dataRow}>
            <div style={{ fontSize: "36px" }}>{item.value}</div>
            <div style={{ fontWeight: "normal", display:"flex", gap:"2px" }}>
                {item.growth}
                {item.growth.startsWith('+') ? <img src={Inc} alt="Inc"/> : <img src={Dec} alt="Dec"/>}
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
