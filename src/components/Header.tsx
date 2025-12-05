import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    worddee.ai
                </Link>
                <div className="flex items-center space-x-8">
                    <Link href="/dashboard" className="text-blue-600 hover:text-blue-700 font-light">
                        My Progress
                    </Link>
                    <Link href="/" className="text-blue-600 hover:text-blue-700 font-light">
                        Word of the Day
                    </Link>
                    <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
