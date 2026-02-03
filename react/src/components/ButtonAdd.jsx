export default function ButtonAdd({ setPopup }) {
  return (
    <button
      onClick={() => setPopup(true)}
      className="absolute top-0 left-4
                 flex items-center justify-center
                 text-2xl pb-1.5
                 bg-[#ff4500] text-white rounded-full
                 w-12.5 h-12.5
                 transition-transform hover:scale-110"
    >
      +
    </button>
  );
}
