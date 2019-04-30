import * as React from 'react'

import { EmojiData, FriendlyEmojiData } from './types'
import { emojiList } from './lib/emoji-list'
import { EmojiCategory } from './emoji-category'
import { categories } from './lib/categories'
import { makeRows } from './lib/make-rows'
import { searchEmojis } from './lib/search'
import { toFriendlyEmojiData } from './lib/converter'
import debounce from 'lodash.debounce'

import './styles/styles.scss'

type Props = {
  placeHolderSearchText?: string
  onClick: (value: FriendlyEmojiData) => void
}

type State = {
  searchString: string
}

export class LocalEmojiPicker extends React.Component<Props, State> {

  state: State = {
    searchString: ''
  }

  setSeachValue = debounce((searchString) => {
    this.setState({
      searchString
    })
  }, 50)

  shouldComponentUpdate (_, nextState: State) {
    if (nextState.searchString !== this.state.searchString) {
      return true
    }

    return false
  }

  doSearch = (value: string) => {
    if (value === '') {
      return emojiList
    }

    return searchEmojis(value)
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setSeachValue(e.target.value.trim())
  }

  renderSearch () {
    return (
      <div
        className='search'
      >
        <input
          className='search-input'
          type='search'
          placeholder={this.props.placeHolderSearchText
            ? this.props.placeHolderSearchText
            : 'Search'
          }
          autoFocus
          onChange={this.onSearchChange}
        />
      </div>
    )
  }

  onClick = (data: EmojiData) => {
    this.props.onClick(toFriendlyEmojiData(data))
  }

  renderCategories () {
    const list = this.doSearch(this.state.searchString.trim())

    return (
      <div className='categories'>
        {categories.map((category) => {
          if (!Array.isArray(list[category.category])) {
            return null
          }

          return (
            <EmojiCategory
              key={category.category}
              category={category}
              list={makeRows(list[category.category])}
              onClick={this.onClick}
            />
          )
        })}
      </div>
    )
  }

  render () {
    return (
      <div className='local-emoji-picker'>
        {this.renderSearch()}
        {this.renderCategories()}

      </div>
    )
  }
}
