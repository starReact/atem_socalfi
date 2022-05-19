import React from 'react'

interface IRecord {
    item: string,
    value: number
}

export default function Record({ item, value }: IRecord) {
  return (
    <li>
        <span>{item}</span>
        <b>{value}</b>
    </li>
  )
}
