export default function Square({ value, onSquareClick, isSuccess }) {
  return (
    <>
      <button
        type="button"
        className={
          (isSuccess ? "bg-sky-700" : "") +
          " relative border dark:border-white border-slate-900 pb-1.5 aspect-square uppercase flex justify-center items-center text-4xl font-bold"
        }
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
