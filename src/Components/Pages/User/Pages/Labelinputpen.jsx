import React, { useState } from 'react';

const CustomInput = ({ placeholder, initialValue, onChange }) => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue || '');

  const enableInput = () => {
    setEditable(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className={`border p-2 pr-10 outline-none rounded-l ${
          editable ? 'border-blue-500' : 'border-gray-300'
        } focus:ring focus:border-blue-300 transition`}
        placeholder={placeholder || 'Enter text'}
        readOnly={!editable}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="absolute p-2 hover:bg-gray-300 rounded-r cursor-pointer"
        onClick={enableInput}
        >
        🖊️
      </button>
    </div>
  );
};

export default CustomInput;
