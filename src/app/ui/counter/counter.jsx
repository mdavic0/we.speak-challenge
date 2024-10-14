// 'use client';

// import { useState, useEffect } from 'react';
import { CounterSkeleton } from '../skeletons';

export default function Counter({count}) {

  console.log('Counter:', count);
  // const [count, setCount] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchCount();
  // }, []);

  // const fetchCount = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('/api/counter');
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const textResponse = await response.text();
  //     console.log('API Response:', textResponse);
  //     const data = JSON.parse(textResponse);
  //     setCount(data.value);
  //   } catch (error) {
  //     console.error('Error fetching count:', error);
  //     setError(`Error fetching count: ${error.message}`);
  //   } finally {
  //       setIsLoading(false);
  //   }
  // };

  // const updateCount = async (increment) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('/api/counter', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ increment }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error updating counter: ${response.statusText}`);
  //     }

  //     await fetchCount();
  //   } catch (error) {
  //     console.error('Error updating counter:', error);
  //     setError(`Error updating counter: ${error.message}`);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
        // isLoading ? (
        //     <CounterSkeleton/>
        // ) : (
            <div className="flex items-center justify-center md:w-3/5 md:pr-40">
                <div className="flex flex-col items-center justify-center flex-grow mt-10">
                    <div className="w-full max-w-md rounded-lg bg-white p-10 text-center shadow-lg">
                    <div className="text-4xl font-bold mb-6 text-gray-800">
                        {count}
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                        className="px-6 py-3 bg-customPurple hover:bg-purple-300 text-white rounded-lg transition-all focus:outline-none"
                        // onClick={() => updateCount(1)}
                        // disabled={isLoading}
                        >
                        <p className="text-xl">
                            <strong>+</strong>
                        </p>
                        </button>
                        <button
                        className="px-6 py-3 bg-customPurple hover:bg-purple-300 text-white rounded-lg transition-all focus:outline-none"
                        // onClick={() => updateCount(-1)}
                        // disabled={isLoading}
                        >
                        <p className="text-xl">
                            <strong>-</strong>
                        </p>
                        </button>
                        {}
                    </div>
                    </div>
                </div>
            </div>
        // )
  );
}