import React from 'react'
import ReactDOM from 'react-dom'
import { LocalEmojiPicker } from '../src/index'

const onClick = (data) => {
  console.log(data)
}

// all
ReactDOM.render(
  <LocalEmojiPicker
    categorySelector
    onClick={onClick}
    idPrefix='example-1'
  />,
  document.getElementById('example-1')
);

// only search
ReactDOM.render(
  <LocalEmojiPicker
    onClick={onClick}
    idPrefix='example-2'
  />,
  document.getElementById('example-2')
);

// only category selector
ReactDOM.render(
  <LocalEmojiPicker
    categorySelector
    search={false}
    onClick={onClick}
    idPrefix='example-3'
  />,
  document.getElementById('example-3')
);

// none
ReactDOM.render(
  <LocalEmojiPicker
    search={false}
    onClick={onClick}
    idPrefix='example-4'
  />,
  document.getElementById('example-4')
);



