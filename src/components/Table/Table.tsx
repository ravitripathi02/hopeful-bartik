import styles from "./Table.module.css";

function Table() {
  const data = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve  Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];
  return (
    <div className={styles.card}>
      <div className={styles.heading}>Top Selling Products</div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={styles.bodyRow}>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.quantity}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;