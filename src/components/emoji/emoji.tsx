import * as React from 'react'

import { EmojiData } from '../../types'

import './emoji-styles.scss'

type Props = {
  data: EmojiData,
  onClick: (value: EmojiData) => void
}

export const Emoji = /* React.memo( */({
  data,
  onClick
}: Props) => (
  <div
    className='emoji-item'
    onClick={() => onClick(data)}
  >
    {data.v}
  </div>
)/* , (prevProps: Props, nextProps: Props) => {

  if (prevProps.data.v === nextProps.data.v) {
    return true
  }

  return false
}) */
