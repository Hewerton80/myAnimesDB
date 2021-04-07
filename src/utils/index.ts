import moment from 'moment';
import { arrayMonths } from '../config/vars';

export const getFormatDate = (date: string | string) => {
    const dateMoment = moment(date);
    const month = dateMoment.get('months');
    const dayOfMont = dateMoment.get('date');
    const year = dateMoment.get('years');
    return `${dayOfMont} ${arrayMonths[month]}, ${year}`;
}

export const getScoreFormat = (score: string | number) => {
    return score ? (Number(score) / 10).toFixed(2) : '';
}