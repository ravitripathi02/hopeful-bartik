import Notifications from "../Notifications/Notifications"
import Activities from "../Activities/Activities"
import Contacts from "../Contacts/Contacts"
function RightNav(){
  return(
        <div>
            <Notifications/>
            <Activities/>
            <Contacts/>
        </div>
  )
}
export default RightNav