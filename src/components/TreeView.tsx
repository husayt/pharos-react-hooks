import { useState } from 'react';
import TreeItem from './TreeItem';

export default function TreeView({ treeData }) {
  return (
    <div>
      <h3>Navigation</h3>
      {treeData.children.map((model, i) => (
        <TreeItem model={model} key={i} />
      ))}
    </div>
  );
}
