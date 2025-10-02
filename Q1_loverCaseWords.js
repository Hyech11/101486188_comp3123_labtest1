function loverCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject('Input mist be an array');
        } else {
            const filtered = mixedArray
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase())
            resolve(filtered);
        }
    });
}

loverCaseWords(['PIZZA', 10, true, 'ApPLe'])
    .then(result => console.log("Result:", result))
    .catch(err => console.error("Error", err));