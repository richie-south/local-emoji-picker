import * as React from 'react'

import { EmojiData } from '../../types'
import { Category } from '../../lib/categories'
import { EmojiRow } from '../emoji-row/emoji-row'
import { Emoji } from '../emoji/emoji'

import './emoji-category-section-styles.scss'

type Props = {
  category: Category,
  categoryNames: boolean
  list: Array<Array<EmojiData>>
  idPrefix?: string
  onClick: (value: EmojiData) => void
}

export const EmojiCategorySection = ({
  category,
  categoryNames,
  list,
  idPrefix = '',
  onClick
}: Props) => {
  return (
    <div className={`emoji-section ${categoryNames ? '' : 'padding-top'}`} id={`${idPrefix}${category.category}`}>
      {categoryNames && (
        <div className='emoji-section-title'>
          <p>{category.category}</p>
        </div>
      )}

      {list.map((row) => {
        const emojis = row.map((emoji) => (
          <Emoji
            key={`${emoji.v}-${emoji.k.join('-')}`}
            data={emoji}
            onClick={onClick}
          />
        ))
        return (
          <EmojiRow
            key={`${row[0].v}-${row[0].k.join('-')}-row`}
          >
            {emojis}
          </EmojiRow>
        )
      })}
    </div>
  )
}
