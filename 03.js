//alert('tes');

var cart = []
function daftarProduk(kode_produk, nama_produk, harga,jumlah){
    this.kode_produk = kode_produk;
    this.nama_produk = nama_produk;
    this.harga = harga;
    this.jumlah = jumlah;
};
function cekKode(kode){
    for (var i=0;i<collection.length;i++){
        if(collection[i].kode_produk==kode){
            return collection[i]
        }
    }
}

function tambahItemKeCart(item){
    console.log(item);
    cart.push(cekKode(item));
};
function total(){
    var x=0
    for (i=0;i<cart.length;i++){
        x=x+cart[i].harga
    };
    return x;
}
var z=0
var collection=[];
var beras = new daftarProduk(001, 'beras', 50, 100);
var minyak = new daftarProduk(002, 'minyak', 10, 50);
var garam = new daftarProduk(003, 'garam', 1, 200);
var gula = new daftarProduk(004,'gula', 1, 100);
var kecap = new daftarProduk(005, 'kecap', 2, 100);
collection.push(beras);
collection.push(minyak);
collection.push(garam);
collection.push(gula);
collection.push(kecap);
//console.log(beras);
//console.log(collection[1].kode_produk);

//tambahItemKeCart('002')
//tambahItemKeCart('004')
//console.log(cart)

