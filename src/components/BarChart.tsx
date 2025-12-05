"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
    levelDistribution: {
        Beginner: number;
        Intermediate: number;
        Advanced: number;
    };
}

export default function BarChart({ levelDistribution }: BarChartProps) {
    const data = [
        { name: 'Beginner', practices: levelDistribution.Beginner },
        { name: 'Intermediate', practices: levelDistribution.Intermediate },
        { name: 'Advanced', practices: levelDistribution.Advanced },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="practices" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </RechartsBarChart>
        </ResponsiveContainer>
    );
}
