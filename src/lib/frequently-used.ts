import store from 'store'

import { EmojiData } from '../types'

export const FREQUENTLY_USED = 'frequently used'
const storePath = 'local-emoji-frequently-used'

type EmojiDataWithUsedNr = {
  used: number
} & EmojiData

export const addToFrequentlyUsed = (emojiData: EmojiData): Array<EmojiDataWithUsedNr> => {
  const currentFrequentlyUsed: Array<EmojiDataWithUsedNr> = store.get(storePath, [])

  let index
  const hasValue = currentFrequentlyUsed
    .find((storedEmojiData: EmojiDataWithUsedNr, i) => {

      if (storedEmojiData.v === emojiData.v) {
        index = i
        return true
      }

      return false
    })

  if (hasValue) {
    const value = currentFrequentlyUsed[index]
    value.used = (value.used + 1)

    currentFrequentlyUsed[index] = value
    store.set(storePath, currentFrequentlyUsed)
    return currentFrequentlyUsed
  }

  const newFrequentlyUsed = [
    ...currentFrequentlyUsed,
    {
      ...emojiData,
      used: 1
    }
  ]

  store.set(storePath, newFrequentlyUsed)
  return newFrequentlyUsed

}

export const getFrequentlyUsed = () => {
  const currentFrequentlyUsed: Array<EmojiDataWithUsedNr> = store.get(storePath , [])
  return currentFrequentlyUsed
}
