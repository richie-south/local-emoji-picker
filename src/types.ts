export type EmojiData = {
  v: string
  k: Array<string>
}

export type FriendlyEmojiData = {
  value: EmojiData['v']
  keywords: EmojiData['k']
}
