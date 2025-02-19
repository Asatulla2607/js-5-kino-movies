import React, { useState } from 'react'

const Modal = ({detail}) => {
   const [modal,setModal] = useState(false)
   
  return (
    <>
     <div onClick={()=>setModal(true)} className="detail-img">
        <img src={`https://media.themoviedb.org/t/p/w220_and_h330_bestv2/${detail.poster_path}`}/>
     </div>
   <div onClick={()=>setModal(false)} hidden={!modal} className='BlurModal'>

   </div>

    <div hidden={!modal}>
    <div className="modal">
        <img src={`https://media.themoviedb.org/t/p/w220_and_h330_bestv2/${detail.poster_path}`}/>
        <div className='modal-title'>
        {detail.title} 
        {detail.release_date}
        </div>
        <div className="modal-items">
        <div onClick={()=>setModal(false)} className='close-modal'>&times;</div>
     </div>
     </div> 
    </div>     
    </>
  )
}

export default Modal;
