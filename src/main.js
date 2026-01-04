// Gerado com o prompt: "Crie uma função que calcula o total de pedidos com desconto aplicado..."
function calcularTotal(pedidos, desconto) {
    return pedidos.reduce((total, pedido) => total + pedido.valor, 0) * (1 - desconto);
}

module.exports = { calcularTotal };
