import React, { useState } from 'react';

const SelectInput: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>Select an option:</label>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};

export default SelectInput;
