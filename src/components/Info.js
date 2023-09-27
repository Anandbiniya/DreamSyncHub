import React from 'react'
import "./info.css"
import img_info from '../assets/photo1.png'
function Info() {
  return (
    <>
    <div className='container info'>
      {/* <div> */}
      <div className='pl-4 pr-4'>
        <h2 className='pb-3'>FEATURES</h2>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
      </div>
      <div>
      <h2 className='pb-3'>BENIFITS</h2>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
      </div>
        <img className='img_info' src={img_info} alt='info'/>

      {/* </div> */}
    </div>
    </>
  )
}

export default Info