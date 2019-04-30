import * as React from 'react'

import { EmojiData } from './types'
import { Category } from './lib/categories'

type EmojiProps = {
  data: EmojiData,
  onClick: (value: EmojiData) => void
}

const Emoji = React.memo(({
  data,
  onClick
}: EmojiProps) => (
  <div
    className='emoji-item'
    onClick={() => onClick(data)}
  >
    {data.v}
  </div>
), (prevProps: EmojiProps, nextProps: EmojiProps) => {

  if (prevProps.data.v === nextProps.data.v) {
    return true
  }

  return false
})

const EmojiRow = React.memo(({ children }: { children: React.ReactNode }) => (
  <div
    className='emoji-row'
  >
    {children}
  </div>
), (prevProps, nextProps)  => {

  const oldKeys = (prevProps.children as any).map((child) => child.key);
  const newKeys = (nextProps.children as any).map((child) => child.key);

  if (oldKeys.join('') === newKeys.join('')) {
    return true
  }

  return false
})

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
