import { EmojiData, FriendlyEmojiData } from '../types'

export const toFriendlyEmojiData = (data: EmojiData): FriendlyEmojiData => ({
  value: data.v,
  keywords: data.k
})

const asciiMatch = {
  "<3": '❤️',
  "</3": '💔',
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
  ":o": '😲',
  ":O": '😲',
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
