function arraychunk(numbers, chunkSize){
    var chunkedArray = [];

    for (let i = 0; i < numbers.length; i += chunkSize) {
        const chuck = numbers.splice(i,chunkSize);
        chunkedArray.push(chuck);
    }

    (numbers.length > 0) ? chunkedArray.push(numbers) : null;

    return chunkedArray;
}

module.exports = arraychunk;