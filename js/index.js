/*
Array Methods - forEach
 */

Array.prototype.myForEach = function (myForEach) {
    var arrayLength = this.length;
    if (typeof myForEach == 'function') {
        for (var i = 0; i <= arrayLength - 1; i++) {
            myForEach(this[i], i, this);
        }
    } else {
        console.log('Please use a function')
    }
};

[1, 2, 3].myForEach(function (item, index) {
    console.log('Index: ' + index + ' Number: ' + item);
});
[1, 2, 3].forEach(function (item, index) {
    console.log('Index: ' + index + ' Number: ' + item);
});

/*
 Array Methods - map
 */

Array.prototype.myMap = function (myMap) {
    var arrayLength = this.length;
    var result = [];
    if (typeof myMap == 'function') {
        for (var i = 0; i <= arrayLength - 1; i++) {
            result[i] = myMap(this[i], i, this);
        }
        return result;
    } else {
        console.log('Please use a function')
    }
};

console.log ([1, 2, 3].map(function (item) {
    return item + 1;
}));
console.log ([1, 2, 3].myMap(function (item) {
    return item + 1;
}));

/*
 Array Methods - sort
 */

Array.prototype.mySort = function (mySort) {
    if (typeof mySort == 'function') {
        mySort();
    } else if (mySort == undefined) {
        var arrayLength = this.length;
        var sorted = true;
        var j = 0;
        while (sorted) {
            sorted = false;
            for (var i = 0; i < arrayLength - 1 - j; i++) {
                if (this[i] + "" > this[i + 1] + "") {
                    var temp = this[i];
                    this[i] = this[i + 1];
                    this[i + 1] = temp;
                    sorted = true;
                }
            }
            j++;
        }
        return this;
    } else {
        console.log('Please use a function')
    }
};

console.log([3, undefined, 1, null, NaN, 'Apple', NaN, 2, 'a2', true, '2a', false, 'apple'].mySort());
console.log([3, undefined, 1, null, NaN, 'Apple', NaN, 2, 'a2', true, '2a', false, 'apple'].sort());