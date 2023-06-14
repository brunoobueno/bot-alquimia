const banco = require("../banco");
const frases = require("../Frases/frases")

function execute(user, msg) {

      if (msg == "0") {
        banco.db[user].stage = 1;
        return [ frases.Menu ];
      }  
      if (msg == "1") { 
        banco.db[user].stage = 3;
        return [ frases.Boleto ];
      }   
      if (msg == "2") {    
        banco.db[user].stage = 3;
        return [ frases.Prazo ];
      }
      if (msg == "3") {
        banco.db[user].stage = 3;
        return [ frases.Cupom ];
      }
      if (msg == "4") {
        banco.db[user].stage = 3;
        return [ frases.Frete ];
      }
      if (msg == "5") {
        banco.db[user].stage = 3;
        return [ frases.ProntaEntrega ];
      }
      if (msg == "6") {
        banco.db[user].stage = 3;
        return [ frases.Chamado ];
      }
      if (msg == "7") {
        banco.db[user].stage = 3;
        return [ frases.SemEstoque ];
      }
      if (msg == "8") {
        banco.db[user].stage = 3;
        return [ frases.Pagamento ];
      }
return [frases.Duvidas , frases.Naoentendeu]
}
exports.execute = execute;