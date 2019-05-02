import * as React from 'react'

import './emoji-row-styles.scss'

type Props = {
  children: React.ReactNode
}

export const EmojiRow = React.memo(({ children }: Props) => (
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
