import { threadId } from "worker_threads";

export function Row() {
    this.rowArray = [];
};

export function Column() {
  this.columnArray = [];
};

Row.prototype.checkRow = function() {
    var valid_row = false
   this.rowArray.forEach( function (index) {
        if (index < 10 || index > 0 || index % 1 == 0) {
            valid_row = true
        }
    });
    return valid_row
}; 
