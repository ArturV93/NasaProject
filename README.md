# 🚀 NASA Project

A project that uses NASA’s API and modern web technologies.

---

## 📂 Clone Repository
```bash
git clone https://github.com/ArturV93/NasaProject.git
cd NasaProject
```
## ⚙️ Backend Setup
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a new environment file:
    - **Windows (PowerShell or CMD):**
        ```bash
        type nul > .env.development.local
        ```
    - **macOS / Linux (bash / zsh):**
        ```bash
        touch .env.development.local
        ```
5. Copy all secret keys from `.env.example` into `.env.development.local`
6. Add your own **NASA_API_KEY** inside `.env.development.local`
7. Navigate back to the root:
    ```bash
    cd ..
    ```
## 💻 Frontend Setup
1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Go back to the root:
    ```bash
    cd ..
    ```
## 🐳 Docker Setup and Run Project
Setup
```bash
docker compose build
```
To run the whole project using Docker:
```bash
    docker compose up
```


## UI
Navigate to front end
```bash
 http://localhost:5111/
```

![til](./nasaUI.gif)