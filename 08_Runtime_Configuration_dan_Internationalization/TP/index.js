const tanggalSekarang = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', { 
  weekday: 'long',
  year: 'numeric', 
  month: 'long',
  day: 'numeric' 
});

const tanggalFormatted = formatter.format(tanggalSekarang);

console.log(`${tanggalFormatted}`);