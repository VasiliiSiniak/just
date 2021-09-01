let fs = require('fs');

class Helper {


    get randomNumber() {
        return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    }


    get randomEmail() {
        return ("vasgen197+test" + this.randomNumber + this.randomNumber + this.randomNumber + "@gmail.com");
    }

    get randomPhoneNumber() {
        return (`91${this.randomNumber}${this.randomNumber}`);
    }

    readFile(path) {
        const data = fs.readFileSync(path);
        return data.toString('utf-8');
    }

}

module.exports = new Helper();