var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Menu",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Finalizar conversa",
    obj: require("./stages/2"),
  },
  3 : {
    descricao: "Central Ajuda",
    obj: require("./stages/3"),
  },
  99: {
    descricao: "Secretaria",
    obj: require("./stages/99"),
  },
  4: {
    descricao: "Compras",
    obg: require("./stages/4"),
  },
};

exports.step = stages;
