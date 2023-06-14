const banco = require("../banco");
const frases = require("../frases/frases")

function execute(user, msg) {
      if (msg == "1") { 
        banco.db[user].stage = 1;
        return [frases.Varejo];
      }   
      if (msg == "2") {    
        banco.db[user].stage = 1;
        return [frases.Atacado];
      }
      if (msg == "0") {
        banco.db[user].stage = 1;
        return [frases.Menu];
      }
return [frases.Finalizarnaoentendeu]
}
exports.execute = execute;