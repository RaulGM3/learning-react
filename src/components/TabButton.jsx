// export default function TabButton ({children, isSelected, onSelect}) {
export default function TabButton ({children, isSelected, ...props}) {
  return (
    <li>
      {/* <button className="{isSelected ? 'active' : undefined}" onClick={onSelect}>{children}</button> */}
      <button className="{isSelected ? 'active' : undefined}" {...props}>
        {children}
      </button>
    </li>
  )
}