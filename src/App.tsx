import { useState, useEffect, useMemo } from 'react';
import AppList from './components/AppList';
import TreeView from './components/TreeView';
import Filter from './components/Filter';

import './App.css';

function findItem(item, parent, level) {
  let node = parent.children.find((x) => x.name === item[level]);
  if (!node) {
    node = { name: item[level], children: [], level };
    parent.children.push(node);
  }
  return node;
}

function App() {
  const [curFilter, setCurFilter] = useState(0);
  const [min, setMin] = useState(0);

  const [max, setMax] = useState(0);
  const [data, setData] = useState([]);
  const [treeData, setTreeData] = useState({ children: [] });
  const filteredData = useMemo(
    () => data.filter((x) => x.spend < curFilter),
    [data, curFilter]
  );

  function initialise(json: any[]) {
    const root = {
      name: 'root',
      children: [],
    };

    let minS = json[0].spend,
      maxS = json[0].spend;
    for (let item of json) {
      let node1 = findItem(item, root, 'BCAP1');
      let node2 = findItem(item, node1, 'BCAP2');
      let node3 = findItem(item, node2, 'BCAP3');
      node3.children.push(item);
      if (item.spend > maxS) maxS = item.spend;
      if (item.spend < minS) minS = item.spend;
    }
    setMin(minS);
    setMax(maxS);
    setCurFilter(Math.ceil((maxS - minS) / 2));

    setTreeData(root);
  }

  async function getData() {
    const json = await (await fetch('/src/data.json')).json();
    setData(json);
    initialise(json);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="Flex-row">
        <div className="Flex-col Justify-start">
          <div className="Tree-container">
            <TreeView treeData={treeData} />
          </div>
          <Filter
            curFilter={curFilter}
            setCurFilter={setCurFilter}
            min={min}
            max={max}
          />
        </div>
        <div className="Flex-col Right-container">
          <AppList items={filteredData} msg="Pharos Systems" />
        </div>
      </div>
    </div>
  );
}

export default App;
