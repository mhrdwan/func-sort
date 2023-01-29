// let jmlh = 10;
// let beroperasi = 6;

// for (let noangkot = 1; noangkot <= jmlh; noangkot++) {
//   if (noangkot <= beroperasi) {
//     console.log("angkot no " + noangkot + " beroperasi");
//   } else {
//     console.log("angkot no " + noangkot + " mogok");
//   }
// }

let angka = prompt("masukan angka: ");

while (true) {
  if (angka % 2 == 0) {
    alert("angka ini adalah GENAP");
  } else if (angka % 2 == 1) {
    alert("angka ini adalah GANJIL");
  } else {
    alert("ini bukan angka");
  }
}
