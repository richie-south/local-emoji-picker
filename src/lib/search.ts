import { EmojiList } from '../types'
import { Category } from './categories'
import { EmojiData } from '../types'

const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g

const escape = (str: string) => {
  if (typeof str !== 'string') {
	  throw new TypeError('Expected a string')
  }

  return str.replace(matchOperatorsRegex, '\\$&')
}

export const searchEmojis = (term: string, list: EmojiList, categories: Array<Category>): EmojiList => {
  if (!term || typeof term !== 'string') {
    return {}
  }

  const searchTermRegExp = new RegExp(`^(?:.* +)*${escape(term)}`, 'i')
  const keywordMatchesSearchTerm = (keywords: string) => searchTermRegExp.test(keywords)
  const emojiMatchesSearchTerm = (emoji: EmojiData) =>
    emoji.k.some(keywordMatchesSearchTerm)

  return categories.map((category: Category) => {
    const categoryList: Array<EmojiData> = list[category.category]
    if (!categoryList) {
      return {
        emojis: [],
        category
      }
    }

    const emojis = categoryList.filter(emojiMatchesSearchTerm)

    return {
      emojis,
      category
    }

  })
  .filter(({ emojis }) => emojis.length > 0)
  .reduce((structure, emojis) => {
    return {
      ...structure,
      [emojis.category.category]: [
        ...(Array.isArray(structure[emojis.category.category])
          ? structure[emojis.category.category]
          : []),
        ...emojis.emojis
      ]
    }
  }, {})
}
