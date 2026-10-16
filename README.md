# 🎙️ Podcast Manager

> API REST desenvolvida em **Node.js e TypeScript** para centralizar episódios de podcasts em vídeo, permitindo listar episódios e filtrá-los pelo nome do podcast.

A proposta é criar uma aplicação inspirada na experiência de navegação da Netflix, organizando conteúdos por categorias e facilitando a descoberta de episódios.

## 🎯 Objetivo

Construir uma API com arquitetura em camadas, separação de responsabilidades e respostas HTTP padronizadas, servindo como base para uma futura interface de navegação de podcasts.

## ✨ Funcionalidades

* Listar episódios de podcasts.
* Filtrar episódios pelo nome do podcast.
* Organizar episódios por categorias.
* Retornar códigos de status HTTP conforme o resultado da consulta.
* Separar as responsabilidades entre controllers, services, repositories e models.

## 🛠️ Tecnologias utilizadas

* **Node.js** — ambiente de execução JavaScript.
* **TypeScript** — tipagem estática.
* **HTTP** — comunicação por requisições e respostas.
* **JSON** — armazenamento inicial dos dados.
* **Git e GitHub** — versionamento do código.

## 🏗️ Arquitetura do projeto

A aplicação utiliza uma arquitetura em camadas para facilitar a organização e a manutenção do código.

```text
src/
├── app.ts
├── server.ts
├── controllers/
│   └── podcast-controller.ts
├── services/
│   ├── list-episodes-service.ts
│   └── filter-episodes-service.ts
├── repositories/
│   ├── podcast-repository.ts
│   └── podcast.json
├── models/
│   ├── podcast-model.ts
│   └── podcast-transfer-model.ts
├── routes/
│   └── routes.ts
└── utils/
    ├── http-method.ts
    ├── status-code.ts
    └── content-type.ts
```

*Estrutura ilustrativa dos arquivos desenvolvidos até o momento.*

### Responsabilidades das camadas

| Camada          | Responsabilidade                                                              |
| --------------- | ----------------------------------------------------------------------------- |
| `server.ts`     | Inicializar o servidor HTTP e escutar a porta configurada.                    |
| `app.ts`        | Receber requisições, identificar rotas e direcionar chamadas aos controllers. |
| `routes/`       | Centralizar as definições das rotas.                                          |
| `controllers/`  | Receber as requisições e construir as respostas HTTP.                         |
| `services/`     | Executar a lógica da aplicação e definir o resultado das operações.           |
| `repositories/` | Ler e consultar os dados armazenados em JSON.                                 |
| `models/`       | Definir os contratos e formatos dos dados.                                    |
| `utils/`        | Centralizar métodos HTTP, códigos de status e tipos de conteúdo.              |

## 📡 Endpoints da API

### 1. Listar episódios

```http
GET /api/list
```

Retorna a lista de episódios cadastrados.

Exemplo de resposta — `200 OK`:

```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - FLOW # 319",
    "videoId": "pQSuQmVfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmVfS30",
    "categories": [
      "saúde",
      "esporte",
      "bodybuilder"
    ]
  }
]
```

Se não houver episódios, a aplicação prevê o retorno do status `204 No Content`.

### 2. Filtrar episódios por podcast

```http
GET /api/episode?p=Flow
```

Recebe o parâmetro `p` pela query string e retorna os episódios cujo nome do podcast corresponde ao valor informado.

Exemplo de resposta — `200 OK`:

```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - FLOW # 319",
    "videoId": "pQSuQmVfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmVfS30",
    "categories": [
      "saúde",
      "esporte",
      "bodybuilder"
    ]
  }
]
```

Quando nenhum episódio corresponder ao filtro, a aplicação prevê o status `204 No Content`.

### Códigos de status

| Código           | Significado                       |
| ---------------- | --------------------------------- |
| `200 OK`         | A consulta retornou episódios.    |
| `204 No Content` | A consulta não retornou conteúdo. |

> Observação: uma resposta HTTP `204` não deve conter corpo. O controller deve encerrar a resposta sem enviar o JSON nesse caso.

## 🚀 Como executar

### Pré-requisitos

* [Node.js](https://nodejs.org/)
* npm

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/MilenaMP/node-ts-webapi-without-frameworks-podcast-manager
cd node-ts-webapi-without-frameworks-podcast-manager
```

Instale as dependências:

```bash
npm install
```

Consulte os scripts disponíveis no projeto:

```bash
npm run start:dev
```

Execute a aplicação utilizando o script de desenvolvimento ou inicialização configurado no `package.json`.

## 📚 Aprendizados

Durante o desenvolvimento, estou praticando:

* Construção de APIs HTTP com Node.js e TypeScript.
* Arquitetura em camadas e separação de responsabilidades.
* Criação de controllers, services e repositories.
* Leitura e filtragem de dados em arquivos JSON.
* Uso de interfaces e DTOs.
* Tratamento de códigos de status HTTP.
* Organização de rotas e constantes reutilizáveis.
* Versionamento com Git e commits semânticos.

## 🔮 Próximos passos

* [ ] Organizar os episódios por categorias.
* [ ] Expandir o conjunto de dados de podcasts.
* [ ] Implementar validações dos parâmetros de consulta.
* [ ] Adicionar testes automatizados.
* [ ] Desenvolver uma interface para consumir a API.
* [ ] Avaliar a migração do armazenamento JSON para um banco de dados.

---

## 📚 Formação

Este projeto foi desenvolvido como parte da formação **Node.js Fundamentals**, da [DIO](https://www.dio.me/), com o objetivo de praticar os fundamentos do Node.js e aplicar conceitos de desenvolvimento de APIs.

Durante o desenvolvimento, pratiquei:

* Organização de uma aplicação em camadas.
* Separação de responsabilidades entre rotas, controllers, services e repositories.
* Criação de endpoints HTTP para listagem e filtragem de episódios.
* Utilização de TypeScript para tipagem e organização do código.
* Tratamento de status HTTP nas respostas da API.
* Uso de arquivos JSON como fonte de dados.

O projeto também faz parte da minha evolução como desenvolvedora, reforçando meus conhecimentos em Node.js, TypeScript e arquitetura de aplicações back-end.

---

Desenvolvido por **Milena** durante a formação Node.js Fundamentals da DIO.

