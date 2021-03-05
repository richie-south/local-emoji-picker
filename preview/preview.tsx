import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Picker} from '../src/components/picker/picker'
import {CategorySelector} from '../src/components/category-selector/category-selector'
import {SearchBar} from '../src/components/search-bar/search-bar'
import {emojiList} from '../src/lib/emoji-list'
import {
  addToFrequentlyUsed,
  getFrequentlyUsed
} from '../src/lib/frequently-used'
import {searchEmojis} from '../src/lib/search'

const onClick = (data) => {
  console.log(data)
}

// custom category selector
/* ReactDOM.render(
  <Picker
    emojiList={emojiList}
    categories={[
      {
        category: 'custom',
        symbol: ''
      },
    ]}
    onSearch={searchEmojis}
    onClick={onClick}
    idPrefix='test'
  />,
  document.getElementById('test')
)
 */
// all
/* function PickerAll() {
  const [frequentlyUsed, setFrequentlyUsed] = useState(getFrequentlyUsed())

  const onClick = (emojiData) => {
    setFrequentlyUsed(addToFrequentlyUsed({
      v: emojiData.value,
      k: emojiData.keywords
    }))
  }

  return (
    <Picker
      categorySelector={CategorySelector}
      searchBar={SearchBar}
      onSearch={searchEmojis}
      emojiList={emojiList}
      frequentlyUsed={frequentlyUsed}
      onClick={onClick}
      categoryNames
      idPrefix='example-1'
    />
  )
}

ReactDOM.render(
  <PickerAll />,
  document.getElementById('example-1')
) */

// only search={Search}
ReactDOM.render(
  <Picker
    searchBar={SearchBar}
    emojiList={emojiList}
    onClick={onClick}
    idPrefix="example-2"
  />,
  document.getElementById('example-2')
)
/*
// only category selector
ReactDOM.render(
  <Picker
  emojiList={emojiList}
    categorySelector={CategorySelector}
    onClick={onClick}
    idPrefix='example-3'
  />,
  document.getElementById('example-3')
)

// custom category selector
ReactDOM.render(
  <Picker
    emojiList={emojiList}
    categorySelector={CategorySelector}
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
) */
/*
function PickerFrequentlyUsed() {
  const [frequentlyUsed, setFrequentlyUsed] = useState(getFrequentlyUsed())

  const onClick = (emojiData) => {
    setFrequentlyUsed(addToFrequentlyUsed({
      v: emojiData.value,
      k: emojiData.keywords
    }))
  }

  console.log('a', frequentlyUsed)
  return (
    <Picker
      emojiList={emojiList}
      frequentlyUsed={frequentlyUsed}
      onClick={onClick}
      idPrefix='example-5'
    />
  )
}

// frequently used
ReactDOM.render(
  <PickerFrequentlyUsed />,
  document.getElementById('example-5')
)

// none
ReactDOM.render(
  <Picker
    emojiList={emojiList}
    onClick={onClick}
    idPrefix='example-6'
  />,
  document.getElementById('example-6')
) */
