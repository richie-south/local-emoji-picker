import { EmojiData } from '../types'
import * as EmojiList from './emoji-list.json'

export type EmojiList = {
  [category: string]: Array<EmojiData>
}

export const emojiList: EmojiList = EmojiList
