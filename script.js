// // let jmlh = 10;
// // let beroperasi = 6;

// // for (let noangkot = 1; noangkot <= jmlh; noangkot++) {
// //   if (noangkot <= beroperasi) {
// //     console.log("angkot no " + noangkot + " beroperasi");
// //   } else if (noangkot === 8 || noangkot === 10)
// //     console.log("angkot no " + noangkot + " lembur");
// //   else {
// //     console.log("angkot no " + noangkot + " mogok");
// //   }
// // }

// // let angka = prompt("masukan angka: ");

// // if (angka % 2 == 0) {
// //   alert("angka ini adalah GENAP");
// // } else if (angka % 2 == 1) {
// //   alert("angka ini adalah GANJIL");
// // } else {
// //   alert("ini bukan angka");
// // }

// let comp = Math.random();
// let p = prompt("gajah,semut,orang");

// if (comp > 1) {
//   comp = " gajah";
// } else if (comp < 1 && comp < 0.067) {
//   comp = "orang";
// } else {
//   comp = "semut";
// }

// const hasil = "";

// if (p == comp) {
//   hasil = "seri";
// } else if (p == "gajah") {
//   hasil = comp == "orang" ? "meanang" : "kalah";
// } else if (p == "orang") {
//   hasil = comp == "gajah" ? "kalah" : "menang";
// } else if (p == "semut") {
//   hasil = comp == "gajah" ? "kalah" : "menang";
// } else {
//   hasil = "bingungkan";
// }

// alert(
//   "kamu memilih " +
//     p +
//     "komputer memilih " +
//     comp +
//     " jadi hasilnya adalah " +
//     hasil
// );

let angka = [1, 2, 13, 51, 61, 52, 4, 6, 78];

angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(","));
