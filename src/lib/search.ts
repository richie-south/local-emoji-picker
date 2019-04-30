import { emojiList } from './emoji-list'
import { categories } from './categories'

const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

const escape = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(matchOperatorsRegex, '\\$&');
};

export function searchEmojis (term) {
  if (!term || typeof term !== 'string') {
    return []
  }

  const searchTermRegExp = new RegExp(`^(?:.* +)*${escape(term)}`, "i")
  const keywordMatchesSearchTerm = keyword => searchTermRegExp.test(keyword)
  const emojiMatchesSearchTerm = emoji =>
    emoji.keywords.concat(emoji.name).some(keywordMatchesSearchTerm)

  return categories.map((category) => {
    const categoryList = emojiList[category.category]

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
