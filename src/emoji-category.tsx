import * as React from 'react'

import { EmojiData } from './types'
import { Category } from './lib/categories'

const Emoji = ({
  data,
  onClick
}: {
  data: EmojiData,
  onClick: (value: EmojiData) => void
}) => (
  <div
    className='emoji-item'
    onClick={() => onClick(data)}
  >
    {data.v}
  </div>
)

const EmojiRow = ({ children }) => (
  <div
    className='emoji-row'
  >
    {children}
  </div>
)

type Props = {
  category: Category,
  list: Array<Array<EmojiData>>
  onClick: (value: EmojiData) => void
}

export const EmojiCategory = ({
  category,
  list,
  onClick
}: Props) => {
  return (
    <div className='emoji-section'>
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
