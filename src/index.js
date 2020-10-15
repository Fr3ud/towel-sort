
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = [];

    matrix.map((el) => {
        if (matrix.indexOf(el) % 2) {
            el.reverse();
        }
        el.map((el) => result.push(el));
    });

    return result;
};
