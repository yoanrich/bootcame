

function doIt() {
    try {
        return 'form try block';
    } catch (e) {
        return 'form catch block'
    } finally {
        return 'form finally block';
    }
}

console.log(doIt());