import { EmojiData, FriendlyEmojiData } from '../types'

export const toFriendlyEmojiData = (data: EmojiData): FriendlyEmojiData => ({
  value: data.v,
  name: data.n,
  keywords: data.k,
  category: data.c,
  unicode: data.uc,
  unicodeAlt: data.uca
})

const asciiMatch = {
  "<3": '❤️',
  ":*": '😗',
  ";*": '😘',
  ":)": '🙂',
  ":(": '🙁',
  ":/": '😕',
  ":|": '😐',
  "(Y)": '👍',
  ":D": '😃',
  ":'(": '😢',
  ";P": '😜',
  ":P": '😛',
  ":p": '😛',
  ":o": '😮',
  "xD": '😆',
  "B)": '😎'
}

export const stringToEmoji = (value: string) => {
  if (typeof value !== 'string') {
    return value
  }

  const trimedLowerCaseValue = value.trim()
  const match = asciiMatch[trimedLowerCaseValue]

  return match
    ? match
    : value
}
