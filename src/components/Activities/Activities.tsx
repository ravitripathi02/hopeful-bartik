import styles from "./Activities.module.css";

const activities = [
  { avatar: "https://randomuser.me/api/portraits/men/32.jpg", text: "You have a bug that needs...", time: "Just now" },
  { avatar: "https://randomuser.me/api/portraits/men/33.jpg", text: "Released a new version", time: "59 minutes ago" },
  { avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "Submitted a bug", time: "12 hours ago" },
  { avatar: "https://randomuser.me/api/portraits/men/34.jpg", text: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { avatar: "https://randomuser.me/api/portraits/men/35.jpg", text: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

function Activities() {
  return (
    <div>
      <div className={styles.sectionTitle}>Activities</div>
      {activities.map((a, idx) => (
        <div key={idx} className={styles.item}>
          <img src={a.avatar} alt="" className={styles.avatar} />
          <div>
            <div className={styles.text}>{a.text}</div>
            <div className={styles.time}>{a.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Activities;