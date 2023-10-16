import React, { useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useNavigate } from 'react-router-dom';



const ListItem = ({index}) => {
  const history=useNavigate()
  const handleClick=()=>{
    history('/watch')
  }
  const [isHovered,setIsHovered]=useState(false)
  const trailer= "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
    className="listitem"
    style={{ left: isHovered && index * 225 - 25 + index * 2 }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
       <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"alt=""/>
      {
        isHovered &&(
          <>
      <video src={trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
            <PlayArrowIcon onClick={handleClick} className='icon'/>
            <AddIcon className='icon'/>
            <ThumbUpOutlinedIcon className='icon'/>
            <ThumbDownOffAltOutlinedIcon className='icon'/>
        </div>
        <div className="itemsInfoTop">
          <span>1 hour 14mins</span>
          <span className='limit'>+16</span> 

          <span>1999</span>
        </div>
        <div className="desc">
         aliquam quisquam iure explicabo quaerat, temporibus beatae expedita vel doloremque itaque iusto, esse maxime optio.
        </div>
        <div className="genre">Action</div>
      </div>
      </>
        )}
    </div>
  


  )
}

export default ListItem
