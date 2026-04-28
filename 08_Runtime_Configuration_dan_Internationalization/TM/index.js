require("dotenv").config({ quiet: true });

const BASE_API = process.env.BASE_API;

const nominalList = [25000, 50000, 100000];

async function getKurs() {
  const response = await fetch(BASE_API);
  const data = await response.json();

  const tanggal = data.date;
  const cnh = data.idr.cnh;
  const eur = data.idr.eur;

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(tanggal));

  for (const nominal of nominalList) {
    const nilaiCNH = nominal * cnh;
    const nilaiEUR = nominal * eur;

    const formattedIDR = new Intl.NumberFormat("id-ID").format(nominal);

    const formattedCNH = new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(nilaiCNH);

    const formattedEUR = new Intl.NumberFormat("id-ID", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(nilaiEUR);

    console.log(
      `Kurs Rp${formattedIDR} pada ${formattedDate} adalah CNH ${formattedCNH} dan ${formattedEUR} €`
    );
  }
}

getKurs();