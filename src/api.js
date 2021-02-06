//Base Url
const base_url = "https://api.rawg.io/api/";

//Getting Current Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}

//Getting Current Day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
}

//Current Date(year/month/day
const currentDay =getCurrentDay();
const currentMonth =getCurrentMonth();
const currentYear =new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const popularGamesUrl =() => `${base_url}${popular_games}`
