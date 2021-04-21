/*
给定一个 n×n 的二维矩阵matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {

    for (let i = 0; i < matrix.length / 2; i++) {

        let temp = matrix[matrix.length - 1-i];
        matrix[matrix.length - 1-i] = matrix[i];
        matrix[i] = temp

        // let arrTop=matrix[i];
        // let arrBottom=matrix[matrix.length-1];
        // console.log(arrTop,arrBottom);
        // [arrTop,arrBottom]=[arrBottom,arrTop]
    }

    console.log(matrix);

    for (let i = 0; i < matrix.length; ++i) {
        for (let j = i + 1; j < matrix.length; ++j) {

            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
            // let bottom=matrix[j][i];
            // [top,bottom]=[bottom,top];

        }
    }
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);
console.log(matrix);
