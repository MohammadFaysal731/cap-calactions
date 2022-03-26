const getPin = () => {
    const pin = (Math.random())
}

const genaraTorCap = () => {

}

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and callin agian ', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};