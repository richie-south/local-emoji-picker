import { EmojiData, FriendlyEmojiData } from '../types'

export const toFriendlyEmojiData = (data: EmojiData): FriendlyEmojiData => ({
  value: data.v,
  name: data.n,
  keywords: data.k,
  category: data.c,
  unicode: data.uc,
  unicodeAlt: data.uca
})
