import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, onSurpriseMe }) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {
          isSurpriseMe &&
          (
            <button
              className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
              type='button'
              onClick={onSurpriseMe}
            >
              Surprise me
            </button>
          )
        }

        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649FF] focus:border-[#4649ff] outline-none block w-full p-3'
        />
      </div>
    </div>
  )
}

export default FormField
