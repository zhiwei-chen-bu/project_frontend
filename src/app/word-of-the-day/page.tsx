"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WordOfTheDayPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        // ในสถานการณ์จริง ตรงนี้จะยิง API ไปตรวจประโยค
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#94A3A5] flex items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 min-h-[500px] flex flex-col justify-center relative">

                {!isSubmitted ? (
                    // ================= STATE 1: CHALLENGE FORM (ภาพ 3) =================
                    <>
                        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-2">Word of the day</h1>
                        <p className="text-gray-500 mb-6">Practice writing a meaningful sentence using today's word.</p>

                        {/* Word Content Area */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            {/* Image */}
                            <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-lg overflow-hidden">
                                {/* Placeholder for leather craft image */}
                                <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400" alt="Runway context" className="w-full h-full object-cover" />
                            </div>

                            {/* Definition */}
                            <div className="flex-1 border border-gray-200 rounded-lg p-5 relative">
                                <span className="font-serif absolute top-[-12px] right-4 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1 rounded-full">
                                    Level Beginner
                                </span>

                                <div className="flex items-center gap-2 mb-2">
                                    <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">▶</button>
                                    <h2 className="font-serif text-2xl font-bold text-gray-800">Runway</h2>
                                </div>

                                <p className="text-gray-400 italic text-sm mb-3">Noun [run-way]</p>
                                <p className="text-gray-700 text-sm mb-3">
                                    <span className="font-bold">Meaning:</span> a strip of hard ground along which aircraft take off and land
                                </p>
                                <p className="text-gray-500 text-sm italic">
                                    "The jet braked hard as its wheels touched the <span className="underline">runway</span>."
                                </p>
                            </div>
                        </div>

                        {/* Input Field */}
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 mb-6 resize-none"
                            rows={3}
                            placeholder="The plane runway is under construction."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />

                        {/* Buttons */}
                        <div className="flex justify-between items-center">
                            <button className="font-serif px-6 py-2 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50">
                                Do it later
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="font-serif px-8 py-2 rounded-full bg-[#2C3E38] text-white font-medium hover:bg-opacity-90 transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </>
                ) : (
                    // ================= STATE 2: COMPLETED (ภาพ 4) =================
                    <div className="text-center">
                        <h1 className="font-serif text-3xl font-bold text-gray-800 mb-4">Challenge completed</h1>

                        <div className="flex justify-center gap-3 mb-8">
                            <span className="font-serif bg-[#FEF3C7] text-[#92400E] text-sm font-bold px-4 py-1 ">
                                Level Beginner
                            </span>
                            <span className="font-serif bg-[#F3E8FF] text-[#6B21A8] text-sm font-bold px-4 py-1 rounded">
                                Score 10.5
                            </span>
                        </div>

                        {/* User Sentence */}
                        <div className="text-left bg-white border border-gray-100 p-4 rounded-lg mb-4 shadow-sm">
                            <p className="text-gray-700">
                                <span className="font-bold text-gray-900">Your sentence: </span>
                                {inputValue || "The plane runway is under construction."}
                            </p>
                        </div>

                        {/* Suggestion Box */}
                        <div className="text-left bg-[#ECFDF5] border border-green-100 p-6 rounded-lg mb-8">
                            <p className="text-[#065F46] font-bold text-sm mb-2">Suggestion: The airport's runway is <span className="underline">undergoing extensive reconstruction</span> to <span className="underline">enhance safety measures</span>.</p>
                            <p className="text-[#047857] text-sm leading-relaxed">
                                The word 'runway' is used correctly in the sentence to refer to the strip of land where planes take off and land. The suggestion sentence provides a more advanced structure and vocabulary, such as 'undergoing extensive reconstruction' and 'enhance safety'.
                            </p>
                        </div>

                        {/* Result Buttons */}
                        <div className="flex justify-between items-center px-4">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="font-serif px-8 py-2 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="font-serif px-6 py-2 rounded-full bg-[#2C3E38] text-white font-medium hover:bg-opacity-90 transition-colors"
                            >
                                View my progress
                            </button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
