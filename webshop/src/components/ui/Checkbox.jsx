
function Checkbox({ handleChecked, label }) {
  return (
    <div className="items-center mb-4">
      <input 
        id="active-checkbox" 
        type="checkbox" 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        onChange={(e) => handleChecked(e.target.checked, "active")}
      />
      <label htmlFor="active-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  )
}

export default Checkbox