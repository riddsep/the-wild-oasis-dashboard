import Select from "./Select";

function SortBy({ options }) {
  function handleChange() {}
  return (
    <div>
      <Select options={options} type="white" onChange={handleChange} />
    </div>
  );
}

export default SortBy;
