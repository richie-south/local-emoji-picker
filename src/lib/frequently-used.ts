import store from 'store'

import { EmojiData } from '../types'

const storePath = 'local-emoji-frequently-used-b'

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
    return currentFrequentlyUsed.sort((a, b) => b.used - a.used)
  }

  const newFrequentlyUsed = [
    ...currentFrequentlyUsed,
    {
      ...emojiData,
      used: 1
    }
  ].sort((a, b) => b.used - a.used)

  store.set(storePath, newFrequentlyUsed)
  return newFrequentlyUsed

}

export const getFrequentlyUsed = () => {
  const currentFrequentlyUsed: Array<EmojiDataWithUsedNr> = store.get(storePath , [])
  return currentFrequentlyUsed.sort((a, b) => b.used - a.used)
}
