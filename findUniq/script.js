/*Допустим есть массив строк.
Все строки содержат одинаковые символы, кроме одной строки.
Надо написать функцию, которая будет принимать этот массив
и находить это слово.
Строки могут содержать пробелы, их нужно игнорировать,
только non-spaces символы имеют значение.
Гарантировано, что массив будет >содержать больше 3 строк*/
function findUniq(arr) {
    var obj = {},
        result = [],
        uniq = '';

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i].replace(/\s/g, '');
        str = str.toLowerCase().split('').sort().join('');
        result.push(str);
        obj[str] = arr[i];
    }
    for (i = 0; i < result.length-1; i++) {
        if (result[i] == result[i+1]) continue;
        uniq = result[i];//проверка без последнего эл-та
    }
    if (result[result.length-1] !== result[result.length-3])
        uniq = result[result.length-1]; //проверка последнего эл-та
    for (var key in obj) {
        if (key == uniq) return obj[key];
    }
}
var arr = ['ca b', 'ac b', 'u      niq', 'ab c', 'bca', 'cab', 'cba' ];
console.log(findUniq(arr));

