// You should implement your task here.



module.exports = function towelSort (matrix) {

  if (!matrix) {

    return [];

  }

  let result = [];

  matrix.forEach((subArray, index) => {

    if (index % 2 === 0) {

        subArray.sort((a, b) => a - b);

    } else {

        subArray.sort((a, b) => b - a);

    }    

  });

  matrix.forEach((subArray) => {

    result = result.concat(subArray);

  })

  return result;

}
