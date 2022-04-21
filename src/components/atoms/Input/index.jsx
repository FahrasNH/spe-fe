import React, { Fragment } from 'react'

const Input = ({
  type,
  label,
  value,
  onChange,
  disabled,
  className,
  placeholder,
  labelClassName,
}) => {
  return (
    <Fragment>
      {label && (
        <label
          className={`block text-gray-700 text-sm font-bold mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className} ${
          disabled ? 'cursor-not-allowed' : ''
        }`}
      />
    </Fragment>
  )
}

export default Input
