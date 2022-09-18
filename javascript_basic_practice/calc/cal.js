(function () {
    const OperatorsArray = ["+", "-", "/", "%", "*"];
    const numberButtons = document.querySelectorAll('.num');
    const operatorButtons = document.querySelectorAll('.operator');
    const prevOperand = document.querySelector('#prevOperand');
    const newOperand = document.querySelector('#newOperand');

    const clearButton = document.querySelector('#clear');
    const deleteButton = document.querySelector('#del');

    // clear Button Handler
    clearButton.addEventListener('click', () => clear());
    // delete Button Handler
    deleteButton.addEventListener('click', () => del());

    operatorButtons.forEach(el =>
        el.addEventListener('click', (el) => {
            const currentOperator = el.currentTarget.innerHTML;
            const lastString = prevOperand.innerHTML;
            const lastChar = lastString.split('').reverse()[0];
            const newString = newOperand.innerHTML;

            if ((!lastString && !newString) || OperatorsArray.includes(lastChar) && OperatorsArray.includes(currentOperator)) {
                return false;
            }

            if (currentOperator === "=") {
                compute();
            } else {
                prevOperand.innerHTML += newString + currentOperator;
                newOperand.innerHTML = '';
            }
        }));

    numberButtons.forEach(el => {
        el.addEventListener('click', (el) => {
            const value = el.currentTarget.innerHTML;
            if (value === "." && newOperand.innerHTML.includes('.')) return;
            newOperand.innerHTML += value;
        });
    });

    function compute() {
        const lastValue = prevOperand.innerHTML;
        const newValue = newOperand.innerHTML;
        if (lastValue) {
            if (newValue && !isNaN(parseInt(lastValue.split('').reverse()[0]))) {
                return;
            }
            const result = eval(lastValue + newValue);
            prevOperand.innerHTML = result;
            newOperand.innerHTML = '';
        }
    }

    function clear() {
        prevOperand.innerHTML = '';
        newOperand.innerHTML = '';
    }

    function truncateValue(el, checkStr) {
        const arr = checkStr.split('');
        const modifiedValue = arr.splice(0, arr.length - 1);
        el.innerHTML = modifiedValue.join('');
    }

    function del() {
        const lastValue = prevOperand.innerHTML;
        const newValue = newOperand.innerHTML;
        if (newValue && newValue.length) {
            truncateValue(newOperand, newValue)
        } else if (lastValue && lastValue.length) {
            truncateValue(prevOperand, lastValue)
        } else { }
    }

})();