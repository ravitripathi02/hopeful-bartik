import styles from "./Notifications.module.css";
import Bug from "../../assets/images/activities/Bug.svg";
import User from "../../assets/images/activities/Account.svg";
import Notification from "../../assets/images/activities/notification.svg";
const notifications = [
  { icon: Bug, text: "You have a bug that needs...", time: "Just now" },
  { icon: User, text: "New user registered", time: "59 minutes ago" },
  { icon: Bug, text: "You have a bug that needs...", time: "12 hours ago" },
  { icon: Notification, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];


function Notifications() {
  return (
    <div>
      <div className={styles.sectionTitle}>Notifications</div>
      {notifications.map((n, idx) => (
        <div key={idx} className={styles.item}>
          <span className={styles.icon}>
            <img src={n.icon} alt="icon" width={16} height={16}/>
          </span>
          <div>
            <div className={styles.text}>{n.text}</div>
            <div className={styles.time}>{n.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Notifications;