import * as React from 'react'

import { EmojiData } from './types'
import { Category } from './lib/categories'
import { EmojiRow } from './emoji-row'
import { Emoji } from './emoji'

type Props = {
  category: Category,
  list: Array<Array<EmojiData>>
  idPrefix?: string
  onClick: (value: EmojiData) => void
}

export const EmojiCategorySection = ({
  category,
  list,
  idPrefix = '',
  onClick
}: Props) => {
  return (
    <div className='emoji-section' id={`${idPrefix}${category.category}`}>
      <div className='emoji-section-title'>
        <p>{category.category}</p>
      </div>
      {list.map((row) => {
        const emojis = row.map((emoji) => (
          <Emoji
            key={`${emoji.uc}-${emoji.uca.join('-')}`}
            data={emoji}
            onClick={onClick}
          />
        ))
        return (
          <EmojiRow
            key={`${row[0].uc}-${row[0].uca.join('-')}-row`}
          >
            {emojis}
          </EmojiRow>
        )
      })}
    </div>
  )
}
