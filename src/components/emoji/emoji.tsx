import * as React from 'react'

import { EmojiData } from '../../types'

import './emoji-styles.scss'

type Props = {
  data: EmojiData,
  onClick: (value: EmojiData) => void
}

export const Emoji = React.memo(({
  data,
  onClick
}: Props) => (
  <button
    className='emoji-item'
    aria-label={data.k.join(' ')}
    onClick={() => onClick(data)}
  >
    {data.v}
  </button>
), (prevProps: Props, nextProps: Props) => {

  if (prevProps.data.v === nextProps.data.v) {
    return true
  }

  return false
})
