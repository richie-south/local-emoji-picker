import React from 'react'
import ReactDOM from 'react-dom'
import { LocalEmojiPicker } from '../src/index'

const onClick = (data) => {
  console.log(data)
}

ReactDOM.render(
  <LocalEmojiPicker
    categorySelector
    onClick={onClick}
  />,
  document.getElementById('example-1')
);
