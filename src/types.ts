export type EmojiData = {
  v: string
  n: string
  k: Array<string>
}

export type FriendlyEmojiData = {
  value: EmojiData['v']
  name: EmojiData['n']
  keywords: EmojiData['k']
}
