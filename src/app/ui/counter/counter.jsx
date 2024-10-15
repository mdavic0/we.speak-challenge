import { updateCount } from '@/app/lib/actions';

export default function Counter({count}) {
    const incrementCount = updateCount.bind(null, {increment: 1});
    const decrementCount = updateCount.bind(null, {increment: -1});

  return (
    <div className="flex items-center justify-center md:w-3/5 md:pr-40">
        <div className="flex flex-col items-center justify-center flex-grow mt-10">
            <div className="w-full max-w-md rounded-lg bg-white p-10 text-center shadow-lg">
                <div className="text-4xl font-bold mb-6 text-gray-800">
                    {count}
                </div>
                <div className="flex justify-center space-x-4">
                    <form action={incrementCount}>
                        <button
                            type='submit'
                            className="px-6 py-3 bg-customPurple hover:bg-purple-300 text-white rounded-lg transition-all focus:outline-none"
                        >
                            <p className="text-xl">
                                <strong>+</strong>
                            </p>
                        </button>
                    </form>
                    <form action={decrementCount}>
                        <button
                            type='submit'
                            className="px-6 py-3 bg-customPurple hover:bg-purple-300 text-white rounded-lg transition-all focus:outline-none"
                        >
                            <p className="text-xl">
                                <strong>-</strong>
                            </p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}