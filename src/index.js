// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var dict_money = {};
    if(currency>0 && currency<=10000){
        var money = {'H':50, 'Q':25, 'D':10, 'N':5, 'P':1};
        for (var key in money){
            var buf_cel = Math.floor(currency/money[key]);
            if(buf_cel>0){
                dict_money[key] = buf_cel;
                currency%=money[key];
                if(currency == 0)break;
            };
        };
    }
    else if(currency>10000){
        dict_money["error"] = "You are rich, my friend! We don't have so much coins for exchange";
    };
    return dict_money;
};
