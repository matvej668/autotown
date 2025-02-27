const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080; // Использует PORT из окружения или 8080

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, "public")));

// Обработчик главной страницы
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index2.html"));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
