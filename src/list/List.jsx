import React, { useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
import './List.scss'


const List = () => {

  const [slideNumber,setSlideNumber]=useState(0)
  const[isMoved,setMoved]=useState(false)
  const listRef=useRef()

  const handleClick=(direction)=>{
    setMoved(true)
    let distance=listRef.current.getBoundingClientRect().x - 50
    console.log("distance is",distance)
    if(direction==="left" && slideNumber>0){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform=`translateX(${230+distance}px)`
    }
    if(direction==="right" && slideNumber<4){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform=`translateX(${-230+distance}px)`

    }
  }

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
    <div className="wrapper">
      <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
      <div className="container" ref={listRef}>
      <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
      </div>
     <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")}/> 
    </div>
  </div>
  )
}

export default List
