import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('Set text filter with provided value', () => {
    const filterAction = setTextFilter('rent');
    expect(filterAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('Set text filter with default value', () => {
    const filterAction = setTextFilter();
    expect(filterAction).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});