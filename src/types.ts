export type EmojiData = {
  v: string
  n: string
  k: Array<string>
  c: string
  uc: string
  uca: Array<string>
}

export type FriendlyEmojiData = {
  value: EmojiData['v']
  name: EmojiData['n']
  keywords: EmojiData['k']
  category: EmojiData['c']
  unicode: EmojiData['uc']
  unicodeAlt: EmojiData['uca']
}
