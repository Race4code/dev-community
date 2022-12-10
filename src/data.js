import first from './Assets/specs.png'
import second from './Assets/redhair.png'
import third from './Assets/yellow.png'
import forth from './Assets/ronal.png'
import firstbg from './Assets/blogimage3.png'
import secondbg from './Assets/blogimage2.png'
import thirdbg from './Assets/blogimage1.png'
import locationIcon from './Assets/small/locationicon.png'
import date from './Assets/small/calender.png'
import suit from './Assets/small/suit.png'
const data=[
    {
        bg:firstbg,
        type:"✍️ Article",
        title:"What if famous brands had regular fonts? Meet RegulaBrands!",
        description:"I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        profileImage:first,
        profileName:"Sarthak Kamra",
        views:"1.4k"
    },
    {
        bg:secondbg,
        type:"🔬️ Education",
        title:"Tax Benefits for Investment under National Pension Scheme launched by Government",
        description:"I've worked in UX for the better part of a decade. From now on, I plan to rei…",
        profileImage:second,
        profileName:"Sarah West",
        views:"1.4k"
    },
    {
        bg:thirdbg,
        type:"🗓️ Meetup",
        title:"Finance & Investment Elite Social Mixer @Lujiazui",
        icon:date,
        description:"fri, 12 Oct, 2018",
        locationIcon:locationIcon,
        location:"Ahmedabad, india",
        link:"Visit Website",
        profileImage:forth,
        profileName:"Ronal Jones",
        views:"1.4k"
    }, 
    {
        bg:null,
        type:"💼️ Job",
        title:"Software Developer",
        icon:suit,
        description:"Innovaccer Analytics Private Ltd.",
        locationIcon:locationIcon,
        location:"Noida, India",
        link:"Apply on Timejobs",
        profileImage:third,
        profileName:"Joseph gray",
        views:"1.4k"
    }
]

export default data