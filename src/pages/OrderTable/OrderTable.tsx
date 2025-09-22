// OrderTable.jsx
import React from "react";
import styles from "./OrderTable.module.css";
import useTableData from "../../hooks/useTable";
import Button from "../../components/ui/button"
import Add from "../../assets/images/table/Add.svg"
import Funnel from "../../assets/images/table/Funnel.svg";
import Sort from "../../assets/images/table/Sort.svg"; 
interface Order {
  orderId: number | string;
  user: string;
  project: string;
  address: string;
  date: string;
  status: string;
}
const OrderTable = () => {
  const {
    data: orders,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setFilter,
    requestSort,
    sortConfig,
    goToPage
  } = useTableData(10); 
  const handleSortByDate = () => {
    requestSort("date"); // "date" should match your JSON field
  };
  return (
    <div className={styles.tableContainer}>
      <div className={styles.header}>
        <h2 className={styles.tableTitle}>Orders</h2>
        
      </div>
      <div className={styles.controls}>
        <div className={styles.buttonGroup}>
          <Button>
            <img src={Add} alt="add" style={{filter: "var(--icon-filter)"}}/>
          </Button>
          <Button>
            <img src={Funnel} alt="add" style={{filter: "var(--icon-filter)"}}/>
          </Button>
          <Button>
            <img src={Sort} alt="add" style={{filter: "var(--icon-filter)"}}/>
          </Button>
        </div>
        <div>
          <input
          type="text"
          placeholder="Search orders..."
          onChange={(e) => setFilter(e.target.value)}
          className={styles.searchBox}
        />
        </div>
      </div>
      <table className={styles.ordersTable}>
        <thead>
          <tr>
            <th onClick={() => requestSort("orderId")}>
              Order ID
              {sortConfig.key === "orderId" && (
                <span className={styles.sortIndicator}>
                  {sortConfig.direction === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th onClick={() => requestSort("user")}>
              User
              {sortConfig.key === "user" && (
                <span className={styles.sortIndicator}>
                  {sortConfig.direction === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th onClick={() => requestSort("project")}>
              Project
              {sortConfig.key === "project" && (
                <span className={styles.sortIndicator}>
                  {sortConfig.direction === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th>Address</th>
            <th>
              Date
            </th>
            <th>Status</th>
          </tr>
        </thead>
    <tbody style={{color:"var(--text-color)"}}>
          {orders.map((order: Order, idx:number) => (
            <tr key={idx}>
              <td className={styles.orderId}>#{order.orderId}</td>
              <td>
                <div className={styles.userCell}>
                  <div className={styles.avatar}>
                    {order.user.charAt(0)}
                  </div>
                  {order.user}
                </div>
              </td>
              <td>{order.project}</td>
              <td className={styles.address}>{order.address}</td>
              <td className={styles.date}>{order.date}</td>
              <td>
                <span className={`${styles.status} ${styles[order.status.replace(" ", "")]}`}>
                  <span className={`${styles.circle} ${styles[order.status.toLowerCase().replace(" ", "")]}`}></span>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
  <Button
    key={index}
    style={{ color: "var(--text-color)", padding: "5px 10px" }}
    onClick={() => goToPage(index + 1)}
  >
    {index + 1}
  </Button>
))}

        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTable;