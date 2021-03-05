import * as React from 'react'

import './search-styles.scss'

type Props = {
  placeHolderText?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({placeHolderText = '', onChange}: Props) => (
  <div className="search">
    <input
      className="search-input"
      aria-label="Search input"
      type="search"
      placeholder={placeHolderText ? placeHolderText : 'Search'}
      autoFocus
      onChange={onChange}
    />
  </div>
)
