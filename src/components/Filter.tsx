export default function Filter({ min, max, curFilter, setCurFilter }) {
  return (
    <div>
      <h3>Filters</h3>
      <label className="Text-left">
        <div>Spending:</div>
      </label>
      <input
        type="range"
        id="filter-range"
        name="filter-range"
        value={curFilter}
        min={min}
        max={max}
        onChange={(e) => setCurFilter(+e.target.value)}
      />
      <div className="Flex Justify-between">
        <span>${min}</span> <span>${max}</span>
      </div>
    </div>
  );
}
