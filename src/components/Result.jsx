export default function Result({ results }) {
  const total = results["X"] + results["O"] + results["D"];

  const percentageOfX = Math.round((results["X"] * 100) / total);
  const percentageOfO = Math.round((results["O"] * 100) / total);
  const percentageOfD = Math.round((results["D"] * 100) / total);

  return (
    <>
      <div className="text-center text-sky-700 font-bold text-4xl">
        Total: {total}
      </div>
      <div className="grid grid-cols-3 pt-4">
        <div className="relative aspect-[1/2]">
          <div
            className="absolute bottom-0 bg-green-500 w-1/3 left-1/3"
            style={{ height: `${percentageOfX}%` }}
          ></div>
        </div>
        <div className="relative aspect-[1/2]">
          <div
            className="absolute bottom-0 bg-red-500 w-1/3 left-1/3"
            style={{ height: `${percentageOfO}%` }}
          ></div>
        </div>
        <div className="relative aspect-[1/2]">
          <div
            className="absolute bottom-0 bg-sky-500 w-1/3 left-1/3"
            style={{ height: `${percentageOfD}%` }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="border aspect-square flex flex-col justify-center items-center">
          <div>X win</div>
          <div className="text-4xl text-green-500">{results["X"]}</div>
        </div>
        <div className="border aspect-square flex flex-col justify-center items-center">
          <div>O win</div>
          <div className="text-4xl text-red-500">{results["O"]}</div>
        </div>
        <div className="border aspect-square flex flex-col justify-center items-center">
          <div>Draw</div>
          <div className="text-4xl text-sky-500">{results["D"]}</div>
        </div>
      </div>
    </>
  );
}
