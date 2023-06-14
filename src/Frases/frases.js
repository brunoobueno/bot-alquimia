// Todas frases que o robo envia esta nesse arquivo
const frases={ 
Ola:
`Olá! Eu sou Robozinho da Alquimia Indústria. Posso te ajudar? É só escolher a Opção abaixo:`,
Menu:
`Digite *1*- Realizar uma Compra 🛒
    
Digite *2*- Andamento do Pedido 📦
 
Digite *3*- Dúvidas de Compras ❓
    
Digite *4*- Compras no Mercado Livre 🏆

Digite *5*- Falar com um Atendente ☎️`,
Naoentendeu:
`Desculpe! Não consegui entender! 😔`,
Compras:
`Qual tipo de compra gostaria de realizar?

Digite *1* - Varejo 📙
Digite *2* - Atacado 📘

Digite *0* - para voltar ao menu principal.`,
Varejo:
`Na modalidade de Varejo, basta você acessar nossa loja virtual através deste link: https://bit.ly/ProdutosLojaVirtual , escolher os produtos e adiciona-los em seu carrinho. 

Após este processo, basta seguir para a pagina de cadastro e finalização do pedido com as escolhas de formas de envio (Correios ou Transp.) e pagamentos (Pix, Boletos e Cartões).


*Digite 0 - para voltar ao menu principal.*`,
Atacado:
`Na modalidade de compras por Atacado você tem um desconto no valor final em compras a partir de R$2.000,00. Além disso você também conta com um sistema de pontuação a qual você troca por descontos em compras futuras. 

A cada pedido finalizado, você recebe 1% deste valor em pontos para utilizar nas próximas compras (Os pontos são acumulativos).

Para usufruir deste benefício, primeiramente você precisa realizar seu cadastro através deste link: https://bit.ly/AtacadoLojaVirtual . E após este processo, basta entrar em contato com nosso Suporte para Liberar seu Acesso a Categoria citada.


*Digite 0 - para voltar ao menu principal.*`,
Andamento:
`escolha abaixo uma das opções para realizar o acompanhamento de seu pedido:

Digite *3* - Pedido Realizado na Loja Virtual
Digite *4* - Pedido Realizado no Mercado Livre

Digite *0* - para voltar ao menu principal.`,
PedidoLV:
`Para acompanhar o andamento de seu pedido basta acessar este link: https://bit.ly/PedidoLojaVirtual

Fazer o Login em sua conta e logo após acessar a lista de pedidos feitos através de seu perfil.

Basta clicar no sinal "+" e conferir o status atual de sua compra. Confira abaixo os significados das respectivas etapas:

*Pagamento:* Siginifica que seu pagamento já foi aprovado. Aguarde para continuidade do processo.

*Aprovado:* Seu pedido foi aprovado e em breve será enviado.

*Faturado:* Siginifica que sua NF-e já foi emitida.

*Em Transporte:* Siginifica que seu pedido já foi enviado e está a caminho do endereço informado.

*Entregue:* Sigfinica que seu Pedido já foi entregue.


*Digite 0 - para voltar ao menu principal.*`,
PedidoML:
`Para Acompanhar o andamento de seu pedido efetuado no Mercado Livre, basta acessar este link: https://bit.ly/PedidoMercadoLivre

Fazer o Login em sua conta e logo após acessar a opção "Minhas Compras"

Selecionar o Item que deseja e clicar em "Acompanhar Pedido"

Logo após aparecerá o status atual da entrega de sua compra!


*Digite 0 - para voltar ao menu principal.*`,
Duvidas:
`Seja Bem vindo a Central de Ajuda e Perguntas Frequentes da Alquimia Indústria. Escolha o assunto relacionado as informações que deseja saber:

Digite *1* - Boleto Faturado 🧾
Digite *2* - Prazo de Entrega ⏱
Digite *3* - Cupom de Desconto 🧧
Digite *4* - Frete Grátis 📦
Digite *5* - Pronta Entrega ⏲
Digite *6* - Como abrir um chamado ☎
Digite *7* - Produtos sem Estoque 💼
Digite *8* - Formas de Pagamento 💵


*Digite 0 - para voltar ao menu principal.*`,
Boleto:
`A Alquimia Indústria oferece faturamento via boleto bancário para Empresas mediante a consulta no CNPJ. O valor minimo da compra faturada é a partir de R$500,00 e pode ser parcelada de acordo com o valor total de seu pedido.


*Digite 0 - para voltar ao menu principal.*`,
Prazo:
`O tempo de entrega é contabilizado a partir da data de postagem.

Trabalhamos com entregas pelos Correios e Transportadoras. O prazo e preço variam de acordo com o tipo de serviço selecionado e o tempo de entrega de acordo com o CEP informado no ato da compra

Produtos que têm disponibilidade imediata são separados e despachados em aproximadamente 72 horas após aprovação do pedido

Todos os pedidos são processados no dia útil seguinte de sua realização, qualquer urgência deve ser informada por um de nossos canais de atendimento.



*Digite 0 - para voltar ao menu principal.*`,
Cupom:
`Estamos sempre desenvolvendo campanhas para oferecer cupons de descontos para nossos clientes. No momento temos um cupom que concede 5% de Desconto em compras a partir de R$100,00. Para utiliza-lo basta adicionar o cupom "CUPOM-5%" no campo especifico no ato da sua compra.


*Digite 0 - para voltar ao menu principal.*`,
Frete:
`Agradecemos por seu interesse em possuir frete grátis!! No momento não existe nenhuma campanha que lhe conceda este benefício. Caso queira ficar por dentro de todas as Promoções e Novidades, Cadastre-se em nossa NewsLetter através deste Link: https://bit.ly/NewsLetterLV


*Digite 0 - para voltar ao menu principal.*`,
ProntaEntrega:
`Produtos que têm disponibilidade imediata são separados e despachados em aproximadamente 24 horas após aprovação do pedido

Todos os pedidos são processados no dia útil seguinte de sua realização, qualquer urgência deve ser informada por um de nossos canais de atendimento.


*Digite 0 - para voltar ao menu principal.*`,
MercadoLivre:
`Para assuntos relacionado ao Mercado Livre, Basta clicar no link abaixo para ser transferido ao Setor especializado. Após clicar, Lembre-se de informar seu Nome e Numero do Pedido para agilizar-mos seu atendimento.

https://bit.ly/AtendimentoParaML


Digite 0 - para voltar ao menu principal.*`,
Chamado:
`Para realizar a abertura de seu chamado conosco basta acessar este link: https://bit.ly/MinhaContaLV , ir até a opção "cadastrar atendimento" no canto superior direito.

Após essa etapa, você irá preencher os campos corretamente informando sua dúvida ou solicitação no campo de mensagem, podendo também anexar arquivos para facilitar o atendimento.


*Digite 0 - para voltar ao menu principal.*`,
SemEstoque:
`Caso você tenha encontrado algum produto a qual infelizmente não temos em estoque, pedimos que clique no botão "Avise-me" dentro do respectivo produto para que você seja notificado assim que o mesmo estiver disponível.


*Digite 0 - para voltar ao menu principal.*`,
Pagamento:
`Para maior praticidade e conforto, aceitamos diversas formas de pagamento:

*PIX:* Basta informar este metódo no ato de sua compra, escanear o código QR ou copiar o código digitavel para realizar o pagamento via PIX de seu pedido.

*Cartão de Crédito:* As principais bandeiras como: VISA e Mastercard. As demais opções você pode conferir na parte inferior da tela, no final da barra de rolamento dentro de nossa loja virtual. Parcele sua compra em até 12x no crédito.

*Boleto Bancário:* Pode ser impresso e pago em qualquer agência bancária de sua preferência. Após o vencimento, Favor entrar em contato com nosso suporte para renovação da data.

*Transferência Eletrônica:* Opção de pagamento para quem tem acesso ao banco via internet com o cartão de segurança.


*Digite 0 - para voltar ao menu principal.*`,
Secretaria:
`Para que eu possa transferir, qual assunto deseja tratar?`,
Secretaria2:
`Muito Obrigado! Pedimos que aguarde. Em breve você será Atendido`,
Entrou:
`*Matheus* se Conectectou a esta conversa!`,
Finalizarconversa:
`Posso te ajudar em algo mais?

Digite *8* - Sim
Digite *9* - Não`,
Finalizarnaoentendeu:
`Desculpe! Não consegui entender! 😔 
Posso te ajudar em algo mais?

Digite *8* - Sim
Digite *9* - Não`,
Finalizarconversaaceitou:
`A Alquimia Indústria Agradece pelo seu Contato! ⭐`,
Ajuda:
`Ok, Vamos começar denovo!!`,
}
module.exports = frases