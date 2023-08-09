function determinant(matrix) {
    const n = matrix.length; // Get the dimension of the matrix
    let det = 1; // Start with determinant as 1

    // Gaussian elimination
    for (let i = 0; i < n; i++) {
        // Find the maximum element in the current column
        let max = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(matrix[j][i]) > Math.abs(matrix[max][i])) {
                max = j;
            }
        }

        // Swap rows if necessary to get the maximum element on the diagonal
        if (i !== max) {
            [matrix[i], matrix[max]] = [matrix[max], matrix[i]]; // Swap rows
            det *= -1; // Swapping rows changes the sign of the determinant
        }

        // If matrix[i][i] is 0, the matrix is singular, and its determinant is 0
        if (matrix[i][i] === 0) return 0;

        // Multiply the determinant with the diagonal element
        det *= matrix[i][i];

        // Eliminate lower elements by subtracting a multiple of the current row from them
        for (let j = i + 1; j < n; j++) {
            const factor = matrix[j][i] / matrix[i][i];
            for (let k = i + 1; k < n; k++) {
                matrix[j][k] -= factor * matrix[i][k];
            }
        }
    }

    // After Gaussian elimination, the determinant of the matrix is the product of the main diagonal elements
    return Math.round(det);
}
