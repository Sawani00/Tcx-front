import React, { useState } from 'react';

const Labelpen = ({ type, label, placeholder, initialValue, onChange }) => {
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
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={type || 'text'}
          className={`font-[Gilroy] border p-2 pr-10 outline-none rounded-[11px] ${
            editable ? 'border-blue-500' : 'border-gray-300'
          } focus:ring focus:border-blue-300 transition`}
          placeholder={placeholder || 'Enter text'}
          readOnly={!editable}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="absolute p-2 rounded-r cursor-pointer"
          onClick={enableInput}
        >
          <img src="../../../public/edit.svg" alt="Edit" className='w-[25px] h-[25px]' />
        </button>
      </div>
    </div>
  );
};

export default Labelpen;