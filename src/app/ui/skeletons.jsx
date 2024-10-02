export function CounterSkeleton() {
    return (
      <div className="flex items-center justify-center md:w-3/5 md:pr-40">
        <div className="flex flex-col items-center justify-center flex-grow mt-10">
          <div className="w-full max-w-md rounded-lg bg-white p-10 text-center shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="h-10 w-24 rounded-md bg-gray-200"></div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="px-6 py-3 bg-gray-200 rounded-lg transition-all focus:outline-none">
                <div className="h-8 w-8 rounded-md bg-gray-300"></div>
              </div>
              <div className="px-6 py-3 bg-gray-200 rounded-lg transition-all focus:outline-none">
                <div className="h-8 w-8 rounded-md bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  