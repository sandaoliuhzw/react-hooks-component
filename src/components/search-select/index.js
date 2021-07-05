import React, { useState, useEffect, useRef } from 'react'
import './search-select.less'
import dataList from './dataList'

export default function useMemoSearchSelect(props) {
  const {inputValue, setInputValue} = props

  const searchSelectRef = useRef()
  const [isFocus, setIsFocus] = useState(false)
  const [valueList, setValueList] = useState(dataList)
  // const [inputValue, setInputValue] = useState('')
  const [isInputComplete, setIsInputComplete] = useState(true)

  const handleFocus = () => {
    setValueList(dataList)
    return setIsFocus(true)
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

  const upDwSearchAssignment = (val, uoOrDw) => {
    let value = ''
    if (val) {
      let indexNum = null 
      dataList.map((item, index) => {
        if (item.name === val) {
         indexNum = index
        }
        return item
      })
      if (uoOrDw === 'up') {
        if (indexNum > 0) {
          value = dataList[indexNum - 1].name
        } else {
          let leng = dataList.length - 1
          value = dataList[leng].name
        }
      }
      if (uoOrDw === 'dw') {
        if (indexNum < dataList.length - 1) {
          value = dataList[indexNum + 1].name
        } else {
          value = dataList[0].name
        }
      }
    } else {
      if (uoOrDw === 'up') {
        let leng = dataList.length - 1
        value = dataList[leng].name
      }
      if (uoOrDw === 'dw') {
        value = dataList[0].name
      }
    }
    setInputValue(value)
  }

  const handleBlur = () => {
    if (isFocus) {
      setInputValue(searchAssignment(inputValue))
    }
    return setIsFocus(false)
  }

  useEffect(() => {
    if (!inputValue) return false 
    if (!isFocus) return false 
    let indexNum = null
    dataList.map((item, index) => {
      if (item.name === inputValue) {
       indexNum = index
      }
      return item
    })
    let optionBox = searchSelectRef.current.querySelector('.option-box')
    setTimeout(() => {
      optionBox.scrollTop = indexNum * 36
    }, 10)
  }, [inputValue, isFocus])
   
  useEffect(() => {
    document.onkeydown = function(event) {
      let e = event || window.event || arguments.calle.caller.arguments[0]
      if (e && e.keyCode === 38) {
        if (isFocus) {
          upDwSearchAssignment(inputValue, 'up')
        }
      }
      if (e && e.keyCode === 40) {
        if (isFocus) {
          upDwSearchAssignment(inputValue, 'dw')
        }
      }
    }
    return () => {
      document.onkeydown = null
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus, inputValue])

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

  const matchingArr = (value) => {
    let noDataBox = searchSelectRef.current.querySelector('.no-data')
    let list = []
    list = dataList.filter(item => {
      return item.name.indexOf(value) >= 0
    })

    if (list.length === 0) {
      noDataBox.style.display = 'inline-block'
    }
    if (list.length > 0) {
      noDataBox.style.display = 'none'
    }
    return setValueList(list)
  }

  const handleChageInputValue = (event) => {
    setInputValue(event.target.value)
    if (isInputComplete) {
      return matchingArr(event.target.value)
    }
    
    let noDataBox = searchSelectRef.current.querySelector('.no-data')
    if (!event.target.value) {
      noDataBox.style.display = 'none'
      return setValueList(dataList)
    }
  }

  const chageCompositionStart = () => {
    setIsInputComplete(false)
  }

  const chageCompositionEnd = (event) => {
    setIsInputComplete(true)
    return matchingArr(event.target.value)
  }
  
  return (
    <div className="search-select"ref={searchSelectRef}>
      <div className="input-box">
        <input 
          className="box"
          type="text" placeholder="请搜索"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleChageInputValue}
          onCompositionStart={chageCompositionStart}
          onCompositionEnd={chageCompositionEnd}
        ></input>
      </div>
      {/* <i className="triangle">△</i> */}
      <i className="triangle"></i>
      <div className="option-box">
        {valueList.map(item => 
          <li 
            className={`li-box ${item.name === inputValue ? 'select-value' : ''}`} 
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