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
        <p className='info_para'>✅  Mentorship</p>
        <p className='info_para'>✅  Peer Programming</p>
        <p className='info_para'>✅  Document Assistence</p>
        <p className='info_para'>✅  Network Building</p>
      </div>
      <div>
      <h2 className='pb-3'>BENIFITS</h2>
        <p className='info_para'>✅  Meet People with similar</p>
        <p className='info_para'>✅  Job Support Training</p>
        <p className='info_para'>✅  Upskilling</p>
        <p className='info_para'>✅  Mentorship with care leaver and Out side of Network</p>
        <p className='info_para'>✅  Support Network of Care Leavers</p>
      </div>
        <img className='img_info' src={img_info} alt='info'/>

      {/* </div> */}
    </div>
    </>
  )
}

export default Info