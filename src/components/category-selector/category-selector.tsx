import * as React from 'react'

import { Category } from '../../lib/categories'

import './category-selector-styles.scss'

type Props = {
  categories: Array<Category>
  onClick: (value: Category) => void
}

const Categories = ({ categories, onClick }: Props) => {
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

export const CategorySelector = ({
  categories,
  onClick
}: Props) => {
  return (
    <div className='category-section'>
      <Categories
        categories={categories}
        onClick={onClick}
      />
    </div>
  )
}
