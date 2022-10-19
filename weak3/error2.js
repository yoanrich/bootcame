

function getErrorInObject() {
    try {
        nonExistentFunction();
    } catch (errorVariabel) {
        return {
            nama: errorVariabel.name,
            pesan: errorVariabel.massage,
            susubab: errorVariabel.stack
        }
    }
}

console.log(getErrorInObject());