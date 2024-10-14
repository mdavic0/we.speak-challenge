import Counter from "../ui/counter/counter";
import WeSpeakLogo from "../ui/we-speak-logo";
import { fetchCount } from "../lib/data";

export default async function CounterPage() {

    const count = await fetchCount();

    console.log('Counterrrrrrrr:', count);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <div className="flex shrink-0 pl-40 rounded-lg bg-white h-[61px]">
                <WeSpeakLogo />
            </div>
            <div className="flex grow flex-col md:flex-row bg-customBackground">
                <div className="flex flex-col justify-center gap-6 rounded-lg md:w-2/5 md:pl-40">
                <p className={`text-xl text-gray-800 md:text-5xl md:leading-normal`}>
                    <strong>WeCount.</strong> Contador simple con persistencia en {' '}
                    <a href="https://vercel.com/docs/storage/vercel-postgres" className="text-customPurple">
                    Vercel Postgres
                    </a>
                </p>
                </div>
            <Counter count={count}/>
            </div>
        </main>
    );
}
