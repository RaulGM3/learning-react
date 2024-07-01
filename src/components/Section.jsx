
// Default se pone cuando en el import es sin {}
export default function Section ({title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}