import React from 'react';
import './Watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';


export default function Watch() {
  const history=useNavigate()
  const handleClick=()=>{
    history('/home')
  }
  return (
    <div className="watch">
      <div className="back" onClick={handleClick}>
        <ArrowBackOutlinedIcon/>
        Home
      </div>
      <video className='video' autoPlay progress controls>
  <source src="https://file-examples.com/storage/fe84ba4555652d722855987/2017/04/file_example_MP4_480_1_5MG.mp4"/>
</video>
    </div>
  );
}
