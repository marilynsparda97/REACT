export function UncontrolledLogin() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <input className="border border-gray-300 p-2 rounded" type="text" />
      <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}