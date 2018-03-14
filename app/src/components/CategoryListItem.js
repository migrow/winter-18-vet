import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryListItem = category => {
  return (
    <div>
      <li key={category.id}>
        {category.shortName}
        {category.icon}
        {category.shortDesc}
      </li>
    </div>
  )
}
