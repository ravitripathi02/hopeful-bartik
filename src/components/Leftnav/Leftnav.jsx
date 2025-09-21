// Leftnav.jsx
import React from "react";
import styles from './Leftnav.module.css';
import IconSet from '../../assets/images/IconSet.svg';
import ArrowRight from '../../assets/images/dashboards/ArrowLineRight.svg';
import useTab from "../../hooks/useTab";
import { useNav } from "../../context/NavContext";
import { useDeviceType } from "../../hooks/useDevice";
import Button from "../ui/button";
function Leftnav() {
  const { active, getActiveTab, data } = useTab();
   const {toggleLeft} = useNav();
  const device = useDeviceType();
  return (
    <div className={styles.outerDiv}>
      <div className={styles.accountContainer} style={{justifyContent:"space-between"}}>
        <div className={styles.accountContainer}>
        <img src={IconSet} alt="Account"/>
        <div style={{fontSize:"14px"}}>ByeWind</div>
        </div>
        {device!=="desktop" &&
        <div onClick={toggleLeft} style={{color:"var(--text-color)", border:"none", padding:"5px 10px", cursore:"pointer"}}>X</div>
        }
        
      </div>

      <div className={styles.frequentTabs}>
        <div style={{height:"28px"}}>Favorites</div>
        <div style={{height:"28px"}}>Recently</div>
      </div>

      <div className={styles.favourite}>
        <div style={{display:"flex", alignItems:"center", height:"28px"}}>
          <span className={styles.circle}></span>
          Overview
        </div>
        <div style={{display:"flex", alignItems:"center", height:"28px"}}>
          <span className={styles.circle}></span>
          Projects
        </div>
      </div>

      {data.map((section, idx) => (
        <div key={idx} className={styles.section}>
          <div className={styles.heading}>{section.heading}</div>
          <div>
            {renderNavItems(section.content, section.id, getActiveTab)}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderNavItems(items, parentId, getActiveTab, depth = 0) {
  return items.map((item, idx) => (
    <div
      key={idx}
      className={styles.navItem}
      style={{ paddingLeft: `${depth * 0.5}rem` }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.25rem",
          position: "relative"
        }}
        className={item.active ? styles.active : ""}
        onClick={() => getActiveTab(item.id, parentId, !!item.children)}
      >
        {item.active && <div className={styles.dash}></div>}
        {item?.children ? <img src={ArrowRight} alt="ArrowRight" style={{filter: "var(--icon-filter)"}}/>:<div style={{width:"16px", height:"16px"}}></div>}
        {item?.image && (
          <img
            src={item.image}
            alt={item.name}
            className={styles.icon}
            style={{ width: 20, height: 20, fill:"var(--text-color)", filter: "var(--icon-filter)"  }}
          />
        )}
        <span>{item.name}</span>
      </div>

      {(item.children && item.focus) && (
        <div className={styles.childNav}>
          {renderNavItems(item.children, item.id, getActiveTab, depth + 1)}
        </div>
      )}
    </div>
  ));
}

export default Leftnav;
