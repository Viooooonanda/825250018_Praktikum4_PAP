// Tombol 1: Menampilkan ID Card
document.getElementById('tombol1').addEventListener('click', function() {
    // Ambil elemen dengan id "IdCard" lalu ubah style jadi block (muncul)
    document.getElementById('IdCard').style.display = 'block';
});

// Tombol 2: Menyembunyikan ID Card
document.getElementById('tombol2').addEventListener('click', function() {
    // Ambil elemen dengan id "IdCard" lalu ubah style jadi none (hilang)
    document.getElementById('IdCard').style.display = 'none';
});
