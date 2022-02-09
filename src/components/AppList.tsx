export default function AppList({ items, msg }) {
  return (
    <div>
      <h1>{msg}</h1>
      <div className="Cards-list">
        {items.map(({ spend, name, id }) => (
          <div className="Box" key={id}>
            <b>{name}</b>
            <br />
            <br />
            Total Spend: ${spend}
          </div>
        ))}
      </div>
    </div>
  );
}
