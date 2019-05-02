import store from 'store'

import { EmojiData } from '../types'

export const FREQUENTLY_USED = 'frequently used'

type EmojiDataWithUsedNr = {
  used: number
} & EmojiData

export const addToFrequentlyUsed = (emojiData: EmojiData): Array<EmojiDataWithUsedNr> => {
  const currentFrequentlyUsed: Array<EmojiDataWithUsedNr> = store.get('local-emoji-frequently-used', [])

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
    store.set('local-emoji-frequently-used', currentFrequentlyUsed)
    return currentFrequentlyUsed
  }

  const newFrequentlyUsed = [
    ...currentFrequentlyUsed,
    {
      ...emojiData,
      used: 1
    }
  ]

  store.set('local-emoji-frequently-used', newFrequentlyUsed)
  return newFrequentlyUsed

}

export const getFrequentlyUsed = () => {
  const currentFrequentlyUsed: Array<EmojiDataWithUsedNr> = store.get('local-emoji-frequently-used' , [])
  return currentFrequentlyUsed
}
