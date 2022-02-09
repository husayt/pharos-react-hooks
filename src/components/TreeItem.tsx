import { useState, useMemo } from 'react';

export default function TreeItem({ model }) {
  const [isOpen, setOpen] = useState(false);
  const isFolder = useMemo(
    () => model.children && model.children.length,
    [model]
  );

  return (
    <li className="List-item Item">
      <div className={isFolder && 'Bold'} onClick={() => setOpen(!isOpen)}>
        {isFolder && <span>{isOpen ? '▲' : '▼'}</span>}
        {model.name}
      </div>
      {isFolder && isOpen && (
        <ul>
          {model.children.map((child, i) => (
            <TreeItem model={child} key={i} />
          ))}
        </ul>
      )}
    </li>
  );
}
