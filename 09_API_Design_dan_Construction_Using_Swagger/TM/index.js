const express = require('express');
const { specs, swaggerUi } = require('./swagger.js');

const app = express();
const PORT = 3000;

app.use(express.json());

// Dokumentasi Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Fungsi untuk membuat angka tetap berdasarkan nama
function generateAngkaRahasia(nama) {
  let hash = 0;

  for (let i = 0; i < nama.length; i++) {
    hash = hash * 31 + nama.charCodeAt(i);
  }

  const angka = Math.abs(hash % 100) + 1;
  return angka;
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Bermain tebak angka
 *     description: Endpoint ini menerima nama dan tebakan, lalu membandingkan tebakan dengan angka rahasia yang tetap berdasarkan nama.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - tebakan
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Arif
 *               tebakan:
 *                 type: integer
 *                 example: 24
 *     responses:
 *       200:
 *         description: Jawaban berhasil diproses.
 *         content:
 *           application/json:
 *             examples:
 *               benar:
 *                 summary: Jika tebakan benar
 *                 value:
 *                   jawaban: "Benar sekali! Tebakannya adalah 24."
 *               terlaluTinggi:
 *                 summary: Jika tebakan terlalu tinggi
 *                 value:
 *                   jawaban: "Tebakanmu terlalu tinggi!"
 *               terlaluRendah:
 *                 summary: Jika tebakan terlalu rendah
 *                 value:
 *                   jawaban: "Tebakanmu terlalu rendah!"
 *       400:
 *         description: Input tidak valid.
 */
app.post('/', (req, res) => {
  const { nama, tebakan } = req.body;

  if (!nama || typeof nama !== 'string') {
    return res.status(400).json({
      error: 'Nama wajib diisi dan harus berupa string',
    });
  }

  if (!Number.isInteger(tebakan)) {
    return res.status(400).json({
      error: 'Tebakan wajib diisi dan harus berupa bilangan bulat',
    });
  }

  if (tebakan < 1 || tebakan > 100) {
    return res.status(400).json({
      error: 'Tebakan harus berada di antara 1 sampai 100',
    });
  }

  const angkaRahasia = generateAngkaRahasia(nama);

  if (tebakan === angkaRahasia) {
    return res.json({
      jawaban: `Benar sekali! Tebakannya adalah ${angkaRahasia}.`,
    });
  }

  if (tebakan > angkaRahasia) {
    return res.json({
      jawaban: 'Tebakanmu terlalu tinggi!',
    });
  }

  return res.json({
    jawaban: 'Tebakanmu terlalu rendah!',
  });
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});