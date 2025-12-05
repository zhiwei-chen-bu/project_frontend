export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Word = {
    id: number;
    word: string;
    meaning: string;
    difficulty: Difficulty;
};

export type SummaryData = {
    total_practices: number;
    average_score: number;
    total_words_practiced: number;
    level_distribution: {
        Beginner: number;
        Intermediate: number;
        Advanced: number;
    };
};

export type HistoryItem = {
    id: number;
    word: string;
    user_sentence: string;
    score: number;
    feedback: string;
    practiced_at: string;
};
