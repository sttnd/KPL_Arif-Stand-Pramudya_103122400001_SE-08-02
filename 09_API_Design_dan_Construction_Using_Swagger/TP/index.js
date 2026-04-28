const express = require('express');
const { specs, swaggerUi } = require('./swagger');

const app = express();
const PORT = 3000;

const menuData = {
  bakmi: {
    "bakmi ayam spesial": 25000,
    "bakmi rica-rica": 28000,
    "bakmi komplit (bakso pangsit)": 35000
  },
  rames: {
    "nasi rames biasa": 15000,
    "nasi rames rendang": 25000,
    "nasi rames telur balado": 18000
  }
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Halaman awal API
 *     description: Menampilkan pesan arahan untuk membuka dokumentasi API.
 *     responses:
 *       200:
 *         description: Pesan berhasil ditampilkan
 */
app.get('/', (req, res) => {
  res.json({
    pesan: 'Cek /docs untuk melihat rincian API'
  });
});

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Menampilkan semua kategori menu
 *     description: Endpoint ini menampilkan daftar kategori menu makanan yang tersedia.
 *     responses:
 *       200:
 *         description: Daftar kategori menu berhasil ditampilkan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *             example:
 *               - bakmi
 *               - rames
 */
app.get('/menu', (req, res) => {
  const categories = Object.keys(menuData);
  res.json(categories);
});

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Menampilkan menu berdasarkan kategori
 *     description: Endpoint ini menampilkan daftar makanan berdasarkan kategori yang dipilih.
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Nama kategori menu, misalnya bakmi atau rames
 *     responses:
 *       200:
 *         description: Menu berhasil ditampilkan
 *       404:
 *         description: Menu tidak ditemukan
 */
app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menu = menuData[category];

  if (menu) {
    res.json(menu);
  } else {
    res.status(404).json({
      error: 'Menu tidak ditemukan'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});