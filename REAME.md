# 🚀 Sistema Web - Angular + Node.js

Este projeto é uma aplicação fullstack composta por:

* **Frontend:** Angular (Standalone)
* **Backend:** Node.js + Express
* Comunicação via API REST

---

# 📁 Estrutura do Projeto

```
meu-projeto/
 ├── frontend/   # Aplicação Angular
 └── backend/    # API Node.js
```

---

# 🧰 Pré-requisitos

Antes de rodar o projeto, instale:

* Node.js (versão LTS recomendada)
* npm (vem com Node)
* Angular CLI

Verifique se estão instalados:

```bash
node -v
npm -v
ng version
```

---

# ⚙️ Instalação do Projeto

## 1️⃣ Clonar o repositório

```bash
git clone <https://github.com/markellynascimento2002-del/JogoDoBichoo.git>
cd JogoDoBichoo
```

---

## 2️⃣ Instalar dependências do backend

```bash
cd backend
npm install
```

---

## 3️⃣ Instalar dependências do frontend

```bash
cd ../frontend
npm install
```

---

# ▶️ Como executar o sistema

## 🔹 1️⃣ Rodar o backend

Abra um terminal:

```bash
cd backend
node server.js
```

Você deve ver:

```
Servidor rodando em http://localhost:3000
```

Teste no navegador:

```
http://localhost:3000/api/mensagem
```

---

## 🔹 2️⃣ Rodar o frontend

Abra outro terminal:

```bash
cd frontend
ng serve
```

Acesse:

```
http://localhost:4200
```

---

# 🔌 Integração Frontend + Backend

O frontend está configurado para consumir a API em:

```
http://localhost:3000/api
```

Exemplo de endpoint:

```
GET /api/mensagem
```

Resposta esperada:

```json
{
  "mensagem": "Backend funcionando com sucesso!"
}
```

# 📦 Scripts úteis

## Backend

```bash
node server.js
```

---

## Frontend

```bash
ng serve
```

---

# 🧪 Tecnologias Utilizadas

* Angular (Frontend)
* Node.js (Backend)
* Express
* TypeScript
* HTML / CSS

---

# 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos.

---

# ✅ Observações

* O backend deve estar rodando antes do frontend para evitar erros de conexão.
* Certifique-se de que as portas 3000 e 4200 estão disponíveis.

---
