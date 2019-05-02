import * as React from 'react'
import debounce from 'lodash.debounce'

import { EmojiData, FriendlyEmojiData } from '../../types'
import { emojiList } from '../../lib/emoji-list'
import { EmojiCategorySection } from '../emoji-category-section/emoji-category-section'
import { categories, Category } from '../../lib/categories'
import { makeRows } from '../../lib/make-rows'
import { searchEmojis } from '../../lib/search'
import { toFriendlyEmojiData } from '../../lib/converter'
import { CategorySelector } from '../category-selector/category-selector'
import { Search } from '../search/search'

import './picker-styles.scss'

type Props = {
  placeHolderSearchText?: string
  search?: boolean
  categorySelector?: boolean
  idPrefix?: string
  onClick: (value: FriendlyEmojiData) => void
}

type State = {
  searchString: string
}

export class Picker extends React.Component<Props, State> {

  state: State = {
    searchString: ''
  }

  static defaultProps = {
    search: true,
    idPrefix: ''
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
    if (!this.props.search) {
      return false
    }

    return (
      <Search
        placeHolderText={this.props.placeHolderSearchText}
        onChange={this.onSearchChange}
      />
    )
  }

  onClick = (data: EmojiData) => {
    this.props.onClick(toFriendlyEmojiData(data))
  }

  renderCategories () {
    const list = this.doSearch(this.state.searchString.trim())

    return (
      <div
        className='categories'
        style={{
          height: `calc(100% - ${this.getHeight()}px)`
        }}
      >
        {categories.map((category) => {
          if (!Array.isArray(list[category.category])) {
            return null
          }

          return (
            <EmojiCategorySection
              key={category.category}
              category={category}
              list={makeRows(list[category.category])}
              idPrefix={this.props.idPrefix}
              onClick={this.onClick}
            />
          )
        })}
      </div>
    )
  }

  onCategoryClick = (category: Category) => {
    const element = document.getElementById(`${this.props.idPrefix}${category.category}`)
    element.scrollIntoView()
  }

  renderCategorySelector () {
    if (!this.props.categorySelector) {
      return null
    }

    return (
      <CategorySelector
        onClick={this.onCategoryClick}
      />
    )
  }

  getHeight () {
    if (this.props.search && this.props.categorySelector) {
      return 78
    }

    if (this.props.categorySelector || this.props.search) {
      return 40
    }

    return 0
  }

  render () {
    return (
      <div className='local-emoji-picker'>
        <div className='controls'>
          {this.renderCategorySelector()}
          {this.renderSearch()}
        </div>
        {this.renderCategories()}

      </div>
    )
  }
}
