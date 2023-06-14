const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {

  if (user == '@c.us' ) {
  banco.db[user].stage = 5;
} else {

  banco.db[user].stage = 1;
  return [ frases.Menu , frases.Ola ];
}

}

exports.execute = execute;
