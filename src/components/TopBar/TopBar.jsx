import styles from "./TopBar.module.css";
import {useNav} from "../../context/NavContext";
import {useTheme} from "../../context/ThemeContext";
import SidePannel from "../../assets/images/topBar/SidePannel.svg"
import Button from "../../components/ui/button"
import Star from "../../assets/images/topBar/Star.svg"
import Theme from "../../assets/images/topBar/Theme.svg"
import History from "../../assets/images/topBar/History.svg"
import Notification from "../../assets/images/topBar/Notification.svg"
function TopBar() {
  const { toggleRight, toggleLeft } = useNav();
  const { theme, toggleTheme } = useTheme();
  // if(!isLeftOpen) return null;
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Button onClick={toggleLeft}>
          <img src={SidePannel} alt="sidePannel" width={16} height={16} style={{filter: "var(--icon-filter)"}}/>
        </Button>
        <Button><img src={Star} alt="star" width={16} height={16} style={{filter: "var(--icon-filter)"}}/></Button>
        <span className={styles.section}>Dashboards</span>
        <span className={styles.divider}>/</span>
        <span className={styles.active}>Default</span>
      </div>
      <div className={styles.right}>
        <input
          className={styles.search}
          placeholder="Search"
          disabled
        />
        <Button onClick={toggleTheme}><img src={Theme} alt="theme" width={16} height={16} style={{filter: "var(--icon-filter)"}}/></Button>
        <Button className={styles.hidden}><img src={History} alt="history" width={16} height={16} style={{filter: "var(--icon-filter)"}}/></Button>
        <Button className={styles.hidden}><img src={Notification} alt="notification" width={16} height={16} style={{filter: "var(--icon-filter)"}}/></Button>
        <Button onClick={toggleRight} className={styles.hidden}>
          <img src={SidePannel} alt="sidePannel" width={16} height={16} style={{filter: "var(--icon-filter)"}}/>
        </Button>
      </div>
    </div>
  );
}

export default TopBar;