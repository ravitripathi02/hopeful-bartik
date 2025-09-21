import Default from "../assets/images/dashboards/Default.svg"
import Ecommerce from '../assets/images/dashboards/Ecommerce.svg';
import Projects from '../assets/images/dashboards/Projects.svg';
import OnlineCourses from '../assets/images/dashboards/OnlineCourses.svg';
import UserProfile from '../assets/images/pages//UserProfile.svg';
import Account from '../assets/images/pages/Account.svg';
import Corporate from '../assets/images/pages/Corporate.svg';
import Blog from '../assets/images/pages/Blog.svg';
import Social from '../assets/images/pages/Social.svg';
export const navData = [
  
  {
    heading: "Dashboard",
    id:1,
    focus:false,
    content: [
      { id:11, name: "Default", image: Default, redirectUrl: "", focus:false, active:true },
      { id:12, name: "eCommerce", image: Ecommerce, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
      { id:13, name: "Projects", image: Projects, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
      { id:14, name: "Online Courses", image: OnlineCourses, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
    ],
  },
  {
    heading: "Pages",
    id:2,
    focus:true,
    content: [
      { 
        id:21,
        focus:true, 
        active:false,
        name: "User Profile",
        image: UserProfile,
        redirectUrl: "",
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
      },
      { id:22, name: "Account", image: Account, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
      { id:23, name: "Corporate", image: Corporate, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
      { id:24, name: "Blog", image: Blog, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
      { id:25, name: "Social", image: Social, redirectUrl: "", focus:false, active:false,
        children: [
          { id:211, name: "Overview", redirectUrl: "", focus:false, active:false },
          { id:212, name: "Projects", redirectUrl: "", focus:false, active:false },
          { id:213, name: "Campaigns", redirectUrl: "", focus:false, active:false },
          { id:214, name: "Documents", redirectUrl: "", focus:false, active:false },
          { id:215, name: "Followers", redirectUrl: "",focus:false, active:false },
        ],
       },
    ],
  },
];