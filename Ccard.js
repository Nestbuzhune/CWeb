function validateCreditCard() {
            var cardNumber = document.getElementById("cardNumber").value;
            var cardType = document.getElementById("cardType").value;

            var valid = false;

            switch (cardType) {
                case "American Express":
                    valid = /^3[47][0-9]{13}$/.test(cardNumber);
                    break;
                case "MasterCard":
                    valid = /^5[1-5][0-9]{14}$/.test(cardNumber);
                    break;
                case "VISA":
                    valid = /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber);
                    break;
                case "Discover":
                    valid = /^6011[0-9]{12}$/.test(cardNumber);
                    break;
                case "Diners Club":
                    valid = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cardNumber);
                    break;
            }

            if (valid) {
                alert("Credit card number is valid!");
            } else {
                alert("Invalid credit card number!");
            }
        }