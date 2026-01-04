# Fluxo de Trabalho Automatizado com IA

![Build Status](https://github.com/AlessandraEsser78/ai-driven/actions/workflows/ci.yml/badge.svg)


## Acelerando o Desenvolvimento e Garantindo Qualidade

### 1. Contexto do Desafio
A equipe de desenvolvimento da nossa ferramenta de colaboração online enfrenta um dilema clássico: **velocidade vs. qualidade**.

- **Desenvolvimento lento:** Criar componentes, endpoints e classes repetitivas consome muito tempo.
- **Baixa cobertura de testes:** Os testes unitários são escritos de forma inconsistente, sendo vistos como tarefas que atrasam o desenvolvimento.
- **Ciclo de feedback lento:** Bugs só são detectados em QA manual ou produção, tornando correções mais caras.
- **Inconsistência no código:** Diferentes abordagens para problemas similares aumentam complexidade e dívida técnica.

Essa situação se agravou após o lançamento de novas funcionalidades prometidas em uma campanha de marketing.

---

### 2. Papel da IA no Desenvolvimento

**GitHub Copilot**:
- Gera código em tempo real, incluindo funções de negócio e testes automatizados.
- Reduz tempo gasto com código repetitivo e boilerplate.
- Ajuda desenvolvedores a manter consistência no estilo e abordagem.

**GitHub Actions**:
- Automatiza o pipeline de CI/CD.
- Executa testes em cada push ou pull request.
- Fornece feedback imediato sobre problemas de código e falhas em testes.
- Permite identificar bugs antes que cheguem à produção.

**Benefício combinado:** velocidade aumentada sem comprometer a qualidade, melhor cobertura de testes e feedback rápido para a equipe.

---

### 3. Caso Real
Empresas como a **Shopify** relataram melhorias significativas ao adotar GitHub Copilot e GitHub Actions:
- Aumento da cobertura de testes automatizados.
- Redução de bugs em produção.
- Ciclos de entrega mais rápidos sem sacrificar a qualidade do código.

Referências:
- [GitHub Copilot: Writing and Explaining Tests](https://github.com/features/copilot#writing-and-explaining-tests)
- [Martin Fowler - Test Coverage](https://martinfowler.com/bliki/TestCoverage.html)
- [GitHub Actions: Building and Testing Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

---

### 4. Parte Prática

**Projeto:** API simples de gerenciamento de pedidos em Node.js.

- Função principal e testes automatizados gerados com GitHub Copilot.
- Workflow de CI/CD configurado com GitHub Actions.
- Badge de status do build incluído neste README.

**Exemplo de função gerada pelo Copilot:**
```javascript
// Gerado com o prompt: "Crie uma função que calcula o total de pedidos com desconto aplicado..."
function calcularTotal(pedidos, desconto) {
    return pedidos.reduce((total, pedido) => total + pedido.valor, 0) * (1 - desconto);
}

module.exports = { calcularTotal };

**Exemplo de teste unitário gerado pelo Copilot:**
// Gerado com o prompt: "Crie testes unitários para a função calcularTotal usando Jest"
const { calcularTotal } = require('../src/main');

test('Calcula total com desconto', () => {
    const pedidos = [{valor:100}, {valor:50}];
    expect(calcularTotal(pedidos, 0.1)).toBe(135);
});

test('Calcula total sem desconto', () => {
    const pedidos = [{valor:200}, {valor:50}];
    expect(calcularTotal(pedidos, 0)).toBe(250);
});

### 5. Como Rodar o Projeto

- Clone o repositório:
git clone https://github.com/AlessandraEsser78/ai-driven.git

- Instale as dependências:
npm install

- Execute os testes:
npm test

- Faça push das alterações e verifique o workflow do GitHub Actions:
Todos os testes serão executados automaticamente.
O badge de status mostrará se o build passou ou falhou.

### 6. Conclusão

- A integração de GitHub Copilot e GitHub Actions demonstra que é possível aumentar a produtividade sem comprometer a qualidade, garantindo:

Código consistente.
Testes automatizados cobrindo funções críticas.
Feedback rápido para correção de bugs.
Redução do ciclo de desenvolvimento.
