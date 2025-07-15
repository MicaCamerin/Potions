

export function Main({items}) {
  return (
    <div className="main">
    {items.map((items, indice) => {
return <div key={indice}>{items}</div>
     })}
    </div>
  )}

