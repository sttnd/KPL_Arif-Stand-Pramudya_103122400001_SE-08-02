import express from "express";
import { swaggerUi } from "./swagger";
import swaggerJSDoc from "swagger-jsdoc";


// Membuat instance aplikasi Express
const app = express();

// Konstanta untuk port dan hostname
const PORT = 8000;
const HOSTNAME = "localhost";

// Middleware untuk parsing JSON
app.use(express.json());

// Middleware untuk menyajikan dokumentasi Swagger UI
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

// Simulasi database film
const daftarFilm = [];

/**
 * @swagger
 * /film:
 *   get:
 *     summary: Mendapatkan daftar semua film
 *     responses:
 *       200:
 *         description: Daftar film berhasil diambil
 *       404:
 *         description: Film tidak ditemukan
 */
app.get('/film', (req, res) => {
    return res.status(200).json(daftarFilm);
});

/**
 * @swagger
 * /film/{id}:
 *   get:
 *     summary: Mendapatkan informasi film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Informasi film berhasil diambil
 *       404:
 *         description: Film tidak ditemukan
 */app.get('/film/:id', (req, res) => {
    const film = daftarFilm.find(m => m.id === parseInt(req.params.id));
    if (!film) {
        return res.status(404).json({ message: "Film tidak ditemukan" });
    }

    return res.status(200).json(film);
});

/**
 * @swagger
 * /film:
 *   post:
 *     summary: Menambahkan film baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan
 *       404:
 *         description: Film tidak ditemukan
 */app.post('/film', (req, res) => {
    const film = {
        id: daftarFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };

    daftarFilm.push(film);
    return res.status(201).json(film);
});

/**
 * @swagger
 * /film:
 *   delete:
 *     summary: Menghapus film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film berhasil dihapus
 *       404:
 *         description: Film tidak ditemukan
 */app.delete('/film/:id', (req, res) => {
    const indeksFilm = daftarFilm.findIndex(f => f.id === Number(req.params.id));
    if (indeksFilm === -1) {
        return res.status(404);
    }

    const filmDihapus = daftarFilm.splice(indeksFilm, 1);
    return res.json(filmDihapus);
});

// Untuk menjalankan peladen pada port 8000 dan hostname localhost
app.listen(8000, "localhost", () => console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`));