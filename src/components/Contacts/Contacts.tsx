import styles from "./Contacts.module.css";

const contacts = [
  { avatar: "https://randomuser.me/api/portraits/women/45.jpg", name: "Natali Craig" },
  { avatar: "https://randomuser.me/api/portraits/men/36.jpg", name: "Drew Cano" },
];

function Contacts() {
  return (
    <div>
      <div className={styles.sectionTitle}>Contacts</div>
      {contacts.map((c, idx) => (
        <div key={idx} className={styles.item}>
          <img src={c.avatar} alt="" className={styles.avatar} />
          <span className={styles.name}>{c.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Contacts;