import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0); // Timer state (milliseconds count)
  const timerRef = useRef(null); // Ref to store interval ID

  // Start the stopwatch
  const startWatch = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 10); // Increment by 10ms for smooth counting
      }, 10);
    }
  };

  // Stop the stopwatch
  const stopWatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // Reset the stopwatch
  const resetWatch = () => {
    stopWatch();
    setTimer(0);
  };

  // Convert milliseconds to formatted time (MM:SS:MS)
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = (ms % 1000) / 10; // Show two decimal places

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
        <div className="text-5xl font-mono bg-gray-700 py-4 px-6 rounded-lg shadow-inner">
          {formatTime(timer)}
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={startWatch}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg"
          >
            Start
          </button>
          <button
            onClick={stopWatch}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg"
          >
            Pause
          </button>
          <button
            onClick={resetWatch}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
