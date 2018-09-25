// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    let change = [
        {'name': 'H', 'value': 50, 'count': 0},
        {'name': 'Q', 'value': 25, 'count': 0},
        {'name': 'D', 'value': 10, 'count': 0},
        {'name': 'N', 'value': 5, 'count': 0},
        {'name': 'P', 'value': 1, 'count': 0},
    ];

    if (currency > 10000) {
        exchange.error = "You are rich, my friend! We don\'t have so much coins for exchange"
    } else {

        for (let i = 0; i < change.length; i++) {
            while (currency >= change[i].value) {
                change[i].count++;
                currency -= change[i].value;
            }
            if (change[i].count !== 0) {
                exchange[change[i].name] = change[i].count;
            }
        }
    }

    return exchange;
}
