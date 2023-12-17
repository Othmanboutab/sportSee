interface User {
    data: {
        id: string;
        userInfos: {
            firstName: string;
            lastName: string;
            age: string;
        };
        todayScore: number;
        keyData: {
            calorieCount: number;
            proteinCount: number;
            carbohydrateCount: number;
            lipidCount: number;
        };
    }
}

interface UserActivity {
    data: {
        userId: number;
        sessions: {
            day: string;
            kilogram: number;
            calories: number;
        }[];
    }
}

interface UserAverageSessions {
    data: {
        userId: number;
        sessions: {
            day: number;
            sessionLength: number;
        }[];
    }
}

interface UserPerformance {
    data: {
        userId: number;
        kind: {
            [key: number]: string;
        };
        data: {
            value: number;
            kind: number;
        }[];
    }
}