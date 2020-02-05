import { Row, Column } from '../src/sudoku.js';
import { exportAllDeclaration } from '@babel/types';


describe('Row', () => {
    
    test('should create row object with row array', () => {
        var row = new Row();
        expect(row.rowArray);
    });   
    test('should create a method that should return true if a row is complete', () => {
        var row = new Row();
        row.rowArray = [1,2,3,4,5,6,7,8,9];
        expect(row.checkRow()).toEqual(true);
    });
});
describe('Column', () => {

    test('should create column object with column array', () => {
        var column = new Column();
        expect(column.columnArray);
    });
});