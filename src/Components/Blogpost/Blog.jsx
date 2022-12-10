import React from 'react'
import view from '../../Assets/small/view.png'
import share from '../../Assets/small/shareicon.png'
import dot from '../../Assets/small/dotbtn.png'
import './Blog.css'

const Blog = ({item}) => {
  return (
    <div className='card'>
        {item.bg && <img src={item.bg} alt="img"className='cardImage'/>}
        <div className='cardContent'>
        <p>{item.type}</p>
        <div className='cardTitle'>
            <p>{item.title}</p>
            <button><img src={dot} alt="menu"/></button>
        </div>
        {(item.type ==='✍️ Article' || item.type ==='🔬️ Education' )?
         <p>{item.description}</p>
         :<div className='description'>
            <div className='details'>
                <div className='date'>
                    <img src={item.icon}alt="icon"/>
                    <p>{item.description}</p>
                </div>
                <div className='location'>
                    <img src={item.locationIcon} alt="location"/>
                    <p>{item.location}</p>
                </div>
            </div>
            {item.link && <div className='linkApply' style={{color:item.type==='💼️ Job'?"#02B875":"#E56135"}}>{item.link}</div>}
        </div>
         }
        <div className='cardFooter'>
            <div className='profile desktopUser'>
                <img src={item.profileImage} alt="profilePic"/>
                <p>{item.profileName}</p>
            </div>
            <div className='views desktopShare'>
                <img src={view} alt="views"/><span>1.4k views</span>
                <button className='desktopShare'><img src={share} alt=""/></button>
            </div>
            <div className='profile mobileUser'>
                <img src={item.profileImage} alt="profileimage"/>
                <div className='userProfileandViews'>
                   <p>{item.profileName}</p>
                   <img src={view} alt="views"/><span>1.4k views</span>
                </div>
            </div>
            <div className='views mobileShare'>
                <button  className='mobileShare'><img src={share} alt=""/> <p>Share</p></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Blog