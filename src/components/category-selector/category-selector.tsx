import * as React from 'react'

import { Category, categories } from '../../lib/categories'

const Categories = ({ onClick }: {
  onClick: (value: Category) => void
}) => {
  return (
    <div className='categories-list'>
      {categories.map((category) => {
        return (
          <div
            key={category.category}
            className='category'
            onClick={() => onClick(category)}
          >
            {category.symbol}
          </div>
        )
      })}
    </div>
  )
}

type Props = {
  onClick: (value: Category) => void
}

export const CategorySelector = ({
  onClick
}: Props) => {
  return (
    <div className='category-section'>
      <Categories
        onClick={onClick}
      />
    </div>
  )
}
