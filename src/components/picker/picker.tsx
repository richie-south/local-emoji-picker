import * as React from 'react'

import { EmojiData, FriendlyEmojiData, EmojiList } from '../../types'
import { EmojiCategorySection } from '../emoji-category-section/emoji-category-section'
import { categories, Category } from '../../lib/categories'
import { makeRows } from '../../lib/make-rows'
import { toFriendlyEmojiData } from '../../lib/converter'

import './picker-styles.scss'

const FREQUENTLY_USED = 'frequently used'

type Props = {
  emojiList: EmojiList

  searchBar?: React.ComponentType<{
    placeHolderText: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }>
  categorySelector?: React.ComponentType<{
    categories: Array<Category>
    onClick: (category: Category) => void
  }>

  placeHolderSearchText?: string
  frequentlyUsed?: Array<EmojiData>
  categoryNames?: boolean
  categories?: Array<Category>
  idPrefix?: string

  onSearch?: (term: string, list: EmojiList, categories: Array<Category>) => EmojiList
  onClick: (value: FriendlyEmojiData) => void
}

type State = {
  searchString: string
}

export class Picker extends React.Component<Props, State> {

  state: State = {
    searchString: '',
  }

  static defaultProps = {
    categories: categories,
    frequentlyUsed: [],
    idPrefix: ''
  }

  setSeachValue = (searchString: string) => {
    this.setState({
      searchString
    })
  }

  shouldComponentUpdate (nextProps, nextState: State) {
    if (nextState.searchString !== this.state.searchString) {
      return true
    }

    if (nextProps.frequentlyUsed.length !== this.props.frequentlyUsed.length) {
      return true
    }

    return false
  }

  doSearch = (value: string) => {
    if (value === '') {
      return {
        ...this.props.emojiList,
        ...(this.props.frequentlyUsed ? {[FREQUENTLY_USED]: this.props.frequentlyUsed} : {})
      }
    }

    return this.props.onSearch(value, {
      ...this.props.emojiList,
      ...(this.props.frequentlyUsed ? {[FREQUENTLY_USED]: this.props.frequentlyUsed} : {})
    }, this.props.categories)
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setSeachValue(e.target.value.trim())
  }

  renderSearch () {
    if (!this.props.searchBar) {
      return false
    }

    const Search = this.props.searchBar
    return (
      <Search
        placeHolderText={this.props.placeHolderSearchText}
        onChange={this.onSearchChange}
      />
    )
  }

  onEmojiClick = (data: EmojiData) => {
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
        {this.props.categories.map((category) => {
          if (!Array.isArray(list[category.category]) || list[category.category].length === 0) {
            return null
          }

          return (
            <EmojiCategorySection
              key={category.category}
              category={category}
              categoryNames={this.props.categoryNames}
              list={makeRows(list[category.category])}
              idPrefix={this.props.idPrefix}
              onClick={this.onEmojiClick}
            />
          )
        })}
      </div>
    )
  }

  onCategoryClick = (category: Category) => {
    const element = document.getElementById(`${this.props.idPrefix}${category.category}`)
    if (element) {
      element.scrollIntoView()
    }
  }

  renderCategorySelector () {
    if (!this.props.categorySelector) {
      return null
    }

    const CategorySelector = this.props.categorySelector
    return (
      <CategorySelector
        categories={this.props.categories}
        onClick={this.onCategoryClick}
      />
    )
  }

  getHeight () {
    if (this.props.searchBar && this.props.categorySelector) {
      return 78
    }

    if (this.props.categorySelector || this.props.searchBar) {
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
