import React from 'react'

export default function DTLButton(props) {
  return (
    <>
    <div className='dtl-common__btn'>
        <a href="/" className='dtl-common__btn-link py-[14px] px-[35px] bg-[#008BD2] text-[#FFF] hover:bg-[#00377B] hover:text-[#fff] rounded-[2px]'>{props.btnText}</a>
    </div>
    </>
  )
}
