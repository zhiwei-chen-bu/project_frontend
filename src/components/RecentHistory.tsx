"use client";

import { HistoryItem } from '@/types';

interface RecentHistoryProps {
    history: HistoryItem[];
}

export default function RecentHistory({ history }: RecentHistoryProps) {
    return (
        <div className="space-y-4">
            {history.length > 0 ? (
                history.map((item) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
                        <div className="flex justify-between items-center mb-1">
                            <p className="font-semibold text-lg text-gray-800">{item.word}</p>
                            <p className={`font-bold text-xl ${
                                item.score >= 8 ? 'text-green-600' : 
                                item.score >= 6 ? 'text-yellow-600' : 
                                'text-red-600'
                            }`}>
                                {item.score.toFixed(1)}
                            </p>
                        </div>
                        <p className="text-sm text-gray-600 italic mb-2">"{item.user_sentence}"</p>
                        <p className="text-xs text-gray-500">{item.feedback}</p>
                        <p className="text-xs text-gray-400 mt-2">{new Date(item.practiced_at).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 py-8">No recent history. Start practicing!</p>
            )}
        </div>
    );
}
