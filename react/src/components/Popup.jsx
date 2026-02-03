import { useState } from "react";

export default function Popup({ popup, handlePopup, getDataReddit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setValue("");
    getDataReddit(value);
    handlePopup();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  if (!popup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-75 text-center shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">
          Enter the name of subreddit
        </h3>

        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="e.g. javascript"
          className="w-full px-3 py-2 border border-gray-300 rounded
                     focus:outline-none focus:ring-2 focus:ring-[#ff4500]
                     mb-4"
        />

        <div className="flex justify-center gap-2">
          <button
            type="submit"
            className="bg-[#ff4500] text-white px-4 py-2 rounded
                       hover:bg-orange-600 transition"
          >
            Add Subreddit
          </button>

          <button
            type="button"
            onClick={handlePopup}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
