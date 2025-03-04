import React from "react";

// Arrow Fuction
// rafce
const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// Nomeação de Componentes
// PascalCase => ex: MainContent; Header

// Nomeação de Variáveis/Funções/...
// camelCase => ex: logoYechow; headerContent

// Nomeação de Classes
// Kebab-case

// export default => importar com qualquer nome e sem chave
// export "sem default" => importar entre chaves e com nome exportado

// Self Closing Tag => ex: <Header/>

// Nomeação de Classes CSS
// Metologia BEM
// |Blocks (Estruturas independentes reutilizáveis) => header
// |Elements (Não é um componente, mas faz parte de um bloco) => header__link
// |Modifiers (Modifica o elemento principal) => header__link--small

// Itens com nomes compostos são separados por hífen(-) => ex: item-list

// Fragment (Tag Vazia) => obs:. Utilizado em muitos casos, pois o returne só comporta um "valor"

// Componentes recebem 'props'/parâmetros

// {items === 5 ? (
//   <>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//   </>
// ) : (
//   <>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//       <SingleItem/>
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`}/>
//   ))}

// Spread operator
// ... (cria cópia de array ou obj)

// Quando componentes se re-rendenizam
// 1 - Quando uma variável de estado usada pelo componente é atualizada

// Hook - useState

// API