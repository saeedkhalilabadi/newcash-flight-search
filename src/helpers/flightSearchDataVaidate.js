export default function flightSearchDataVaidate({ from = null, to = null, date = null, count = null }) {
    return { count: validateCount(count), date: validateDate(date), from: validateCity(from), to: validateCity(to) }
}

const validateCity = (param) => {

    if (param?.hasOwnProperty('id'))
        return null;
    return 'The city is not selected correctly'
}

const validateCount = (param) => {
    if (param <= 0 || param > 10)
        return 'Incorrect number entered ';
    return null;
}

const validateDate = (param) => {

    if (typeof param !== 'string' || param.trim().length !== 10)
        return 'Incorrect date format!!!!';

    let thisDate = param.split("-");
    if (thisDate.length === 3 &&
        thisDate[0].length === 4 &&
        thisDate[1] > 0 &&
        thisDate[1] <= 12 &&
        thisDate[1].length === 2 &&
        thisDate[2] > 0 &&
        thisDate[2] <= 31 &&
        thisDate[2].length === 2
    )
        return isNextTime(param) ? null : 'The date must be after today'

    return 'Incorrect date format!!!';

}


/**
 * 
 * @param {string} date  
 * @returns 
 */

const isNextTime = (date) => {
    const today = new Date();
    const someday = new Date();
    someday.setFullYear(date.split('-')[0], date.split('-')[1] - 1, date.split('-')[2]);
    if (someday >= today)
        return true
    return false;


}