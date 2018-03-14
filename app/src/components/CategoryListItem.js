import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryListItem = props => {
  return (
    <div>
      <li key={props.id}>
        {props.shortName}
        {props.icon}
        {props.shortDesc}
      </li>
    </div>
  )
}
