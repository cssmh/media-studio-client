const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[78vh]">
      <h2 className="text-2xl font-bold mb-4">Loading Movies...</h2>
      <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`bar animate-bounce delay-${index}`}>
            <style>{`
              .bar {
                width: 20px;
                height: 30px;
                background-color: #3498db;
                animation: loading 1s infinite;
              }

              @keyframes loading {
                0%,
                20%,
                100% {
                  transform: scaleY(1);
                }
                50% {
                  transform: scaleY(1.5);
                }
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
