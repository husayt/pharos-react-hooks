import { useState } from 'react';

export default function AppList({ items, msg }) {
  // const items = [{ spend: 1022, name: 'Hello', id: 2 }];

  // const [msg] = useState('Hello');
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
