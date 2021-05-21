import React, { useState, useEffect, useRef } from 'react'
import './search-select.less'
import dataList from './dataList'

export default function useMemoSearchSelect() {
  const searchSelectRef = useRef()
  const [isFocus, setIsFocus] = useState(false)
  const [valueList, setValueList] = useState(dataList)
  const [inputValue, setInputValue] = useState('')

  const handleFocus = () => {
    setValueList(dataList)
    return setIsFocus(true)
  }
  const handleBlur = () => {
    if (isFocus) {
      setInputValue(searchAssignment(inputValue))
    }
    return setIsFocus(false)
  }

  useEffect(() => {
    let optionBox = searchSelectRef.current.querySelector('.option-box')
    let triangle = searchSelectRef.current.querySelector('.triangle')
    if (isFocus) {
      optionBox.style.display = 'inline-block'
      setTimeout(() => {
        optionBox.style.maxHeight = '300px'
      }, 10)
      triangle.style.transformOrigin = '8px 15px'
      triangle.style.transform = 'rotate(180deg)'
    } else {
      optionBox.style.maxHeight = '0px'
      setTimeout(() => {
        optionBox.style.display = 'none'
      }, 300)
      triangle.style.transformOrigin = '8px 15px'
      triangle.style.transform = 'rotate(0deg)'
    }
  }, [isFocus])

  const handleClickOption = (obj) => {
    setInputValue(obj.name)
  }

  const handleChageInputValue = (event) => {
    setInputValue(event.target.value)
    let noDataBox = searchSelectRef.current.querySelector('.no-data')
    if (!event.target.value) {
      noDataBox.style.display = 'none'
      return setValueList(dataList)
    }
  }

  const handleChageCompositionend = (event) => {
    let noDataBox = searchSelectRef.current.querySelector('.no-data')
    let list = []
    valueList.filter(item => {
      if (item.name.indexOf(event.target.value) >= 0) {
        list.push(item)
      }
      return item
    })

    if (list.length === 0) {
      noDataBox.style.display = 'inline-block'
    }
    if (list.length > 0) {
      noDataBox.style.display = 'none'
    }
    setValueList(list)
  }

  const searchAssignment = (val) => {
    let value = ''
    dataList.map(item => {
      if (item.name === val) {
        value = val
      }
      return item
    })
    return value
  }
  
  return (
    <div className="search-select"ref={searchSelectRef}>
      <input 
        className="input-box" type="text" placeholder="请搜索"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputValue}
        onChange={handleChageInputValue}
        onCompositionEnd={handleChageCompositionend}
      ></input>
      {/* <i className="triangle">△</i> */}
      <i className="triangle"></i>
      <div className="option-box">
        {valueList.map(item => 
          <li className="li-box" 
            key={item.id} 
            value={item.id}
            onMouseDown={ () => handleClickOption(item) }
          >{item.name}</li>
        )}
        <div className="no-data">无匹配数据</div>
      </div>
    </div>
  )
}