type TagListProps = {
  items: string[]
  label: string
}

export function TagList({ items, label }: TagListProps) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
