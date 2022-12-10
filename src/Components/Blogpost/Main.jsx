import React from 'react'
import data from '../../data'
import Blog from './Blog'
import './Main.css'
import pencil from '../../Assets/small/pencilicon.png'
import location from '../../Assets/small/locationicon.png'
import caution from '../../Assets/small/what.png'
import group from '../../groupData' 
import thumbsup from '../../Assets/small/thumbsup.png'
const Main = ({isLogin}) => {
    console.log(data)
  return (
    <div className='main'>
        <div className='content'>
            {
                data.map((item,index)=>{
                    return <Blog key={index} item={item}/>
                })
            }
        </div>
        <div className='sidebar'>
            <div className='locationInput'>
                <img src={location} alt="location"/>
                <input type="text" placeholder='Location'/>
                <img src={pencil}alt="edit"/>
            </div>
            <div className='caution'>
                <img src={caution} alt="notice"/>
                <p>Your location will help us serve better and extend a personal experiencce</p>
            </div>
            {
                isLogin && 
                <div className='recommended'>
                    <div className='recommendedTitle'>
                        <img src={thumbsup} alt="thumbsup"/>
                        <p>RECOMMENDED Groups</p>
                    </div>
                    <div className='recommendedGroups'>
                        {
                            group.map((item,index)=>{
                                return <div key={index} className='singleGroup'>
                                          <div>
                                            <img src={item.image} alt=""/>
                                            <p>{item.name}</p>
                                          </div>
                                          <button>Follow</button>
                                       </div>
                            })

                        }
                        <p>See More...</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Main