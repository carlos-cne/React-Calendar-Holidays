# React Calendar Holidays Brazil

## Informações sobre o projeto

Este projeto foi construido basedo neste calendário: [Event Calendar Widget](https://codepen.io/peanav/full/ulkof) criado por Paul Navasard (@peanav).
Também estou usando a API de feriados nacionais conhecidos de [Festivo](https://getfestivo.com).

Foi construido usando a Lib React com hooks.

Para estilização foi utilizado o Styled Components, uma vez que a proposta do React é trabalhar com componentes.

Para comunicação com a API utilizei o métedo Fetch já aceito por praticamente todos navegadores, se não todos.

Se você gostar deste projeto e quiser clonar e melhorar, fique a vontade.

## Minhas impressões sobre a criação do Calendário

Ainda estou no início da jornada essa foi a primeira vez que peguei um calendário para fazer. O desafio foi conseguir pensar logicamente para renderizar os dias do calenário usando cada semana como linha.

Utilizei o Moment para facilitar a criação dos dias do calendário, fora que usando o Moment, num futuro fica fácil de inserir acessibilidade.

Outro desafio ainda é sobre o CSS no quesito animação. Estou estudando bastate pra melhorar.

Os próximos passos serão:

- melhorar as animações.
- Melhorar a estrutura de pastas e arquivos.
- Revisar a lógica.
- Responsividade.
- Melhorar os controles.

## Como rodar o projeto

Clone o projeto. Por padrão será salvo na pasta React-Calendar-Holidays.
Acesse a pasta, rode o comando `yarn` ou `npm i` para instalar as dependências. Ao finalizar, execute `yarn start` ou `npm start`.

## Quero sugerir mudanças

Se você quiser me ajudar no projeto, mande um PR criando um branch a partir da Master com o seguinte pattern: **feat/seu-nome/feature**

Ficarei muito honrado em receber seu PR.

## Informações importantes

Neste projeto estou utilizando a API da getfestivo com a conta de developer. Ela tem liberado 100 consultas diárias.

Caso você clonar este projeto, sugiro que acesse o site deles e gere sua própria chave, uma vez que esta pode se esgotar rapidamente ou até mesmo expirar.

### Informações adicionais

Usei o Create React App para facilitar a criação do projeto e por isso vou deixar a descrição que vem no readme original abaixo:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
