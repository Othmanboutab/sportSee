const getUserDetails = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        const user = await response.json();
        return user;
    } catch (e) {
        console.log(e);
    }
};


const getUserActivity = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/activity`)
        const userActivity = await response.json();
        return userActivity;
    } catch (e) {
        console.log(e);
    }
};

const getUserSessions = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        const userSessions = await response.json();
        return userSessions;
    } catch (e) {
        console.log(e);
    }
};

const getUserPerformance = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/performance`)
        const userPerformance = await response.json();
        return userPerformance;
    } catch (e) {
        console.log(e);
    }
};

export { getUserDetails, getUserPerformance, getUserSessions, getUserActivity }