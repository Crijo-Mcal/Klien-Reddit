export default function Lanes() {
  return (
    <>
      <div className="flex justify-center gap-4 flex-wrap flex-1">
        <div className="bg-white rounded-lg shadow-md min-w-70 p-4">
          {/* lane header */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
            <h2 className="text-sm text-[#ff4500]">/r/learnprogramming</h2>

            <div className="flex gap-1">
              <button className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300">
                Refresh
              </button>
              <button className="bg-gray-200 px-2 py-1 rounded text-sm hover:bg-gray-300">
                Delete
              </button>
            </div>
          </div>

          {/* posts */}
          <ul>
            <li className="py-1 border-b border-gray-100">
              <span className="text-[#ff4500] font-bold mr-2">▲ 431</span>
              Post title here
            </li>
            <li className="py-1 border-b border-gray-100">
              <span className="text-[#ff4500] font-bold mr-2">▲ 312</span>
              Another post here
            </li>
            <li className="py-1 border-b border-gray-100">
              <span className="text-[#ff4500] font-bold mr-2">▲ 123</span>
              Yet another post
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
