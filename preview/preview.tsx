import React from 'react'
import ReactDOM from 'react-dom'
import { LocalEmojiPicker } from '../src/index'

const onClick = (data) => {
  console.log(data)
}

// all
ReactDOM.render(
  <LocalEmojiPicker
    search
    categorySelector
    frequentlyUsed
    onClick={onClick}
    idPrefix='example-1'
  />,
  document.getElementById('example-1')
);

// only search
ReactDOM.render(
  <LocalEmojiPicker
    search
    onClick={onClick}
    idPrefix='example-2'
  />,
  document.getElementById('example-2')
);

// only category selector
ReactDOM.render(
  <LocalEmojiPicker
    categorySelector
    onClick={onClick}
    idPrefix='example-3'
  />,
  document.getElementById('example-3')
);

// custome category selector
ReactDOM.render(
  <LocalEmojiPicker
    categorySelector
    frequentlyUsed
    categories={[
      {
        category: 'symbols',
        symbol: '💕'
      },
      {
        category: 'flags',
        symbol: '🇸🇪'
      }
    ]}
    onClick={onClick}
    idPrefix='example-4'
  />,
  document.getElementById('example-4')
);

// frequently used
ReactDOM.render(
  <LocalEmojiPicker
    frequentlyUsed
    onClick={onClick}
    idPrefix='example-5'
  />,
  document.getElementById('example-5')
);

// none
ReactDOM.render(
  <LocalEmojiPicker
    onClick={onClick}
    idPrefix='example-6'
  />,
  document.getElementById('example-6')
);



