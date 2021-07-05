import React, { useState } from 'react'
import SearchSelect from '@components/search-select'
import './inputsdl.less'

export default function InputSDL() {
  const [inputValue, setInputValue] = useState('')
  // const consoleValue = () => {
  //   console.log(inputValue)
  // }
  return (
    <div className="input-sdl">
      <h2>搜索框</h2>
      <SearchSelect inputValue={inputValue} setInputValue={setInputValue}></SearchSelect>
    </div>
  )
}