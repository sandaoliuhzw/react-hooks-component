import React from 'react'
import './search-select.less'
import dataList from './dataList'
import { useState, useEffect, useRef } from 'react'

export default function SearchSelect() {
  const searchSelectRef = useRef()
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = () => {
    return setIsFocus(true)
  }
  const handleBlur = () => {
    return setIsFocus(false)
  }
  useEffect(() => {
    let optionBox = searchSelectRef.current.querySelector('.option-box')
    if (isFocus) {
      optionBox.style.display = 'inline-block'
    } else {
      optionBox.style.display = 'none'
    }
  }, [isFocus])
  return (
    <div className="search-select"ref={searchSelectRef}>
      <input 
        className="input-box" type="text" placeholder="请搜索"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      <i className="triangle">△</i>
      <div className="option-box">
        {dataList.map(item => 
          <option className="li-box" key={item.id} value={item.id}>{item.name}</option>
        )}
      </div>
    </div>
  )
}