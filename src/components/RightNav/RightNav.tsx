import Notifications from "../Notifications/Notifications"
import Activities from "../Activities/Activities"
import Contacts from "../Contacts/Contacts"
import { useNav } from "../../context/NavContext";
import { useDeviceType } from "../../hooks/useDevice";
function RightNav(){
   const {toggleRight} = useNav();
    const device = useDeviceType();
  return(
        <div>
            {device!=="desktop" &&
        <div onClick={toggleRight} style={{color:"var(--text-color)", border:"none", padding:"5px 10px", cursor:"pointer", position:"absolute", right:"10px"}}>X</div>
        }
            <Notifications/>
            <Activities/>
            <Contacts/>
        </div>
  )
}
export default RightNav