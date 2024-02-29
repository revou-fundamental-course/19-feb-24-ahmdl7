document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    let tanggalSekarang = new Date()
    let hari = tanggalSekarang.getDay()
    let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][hari]
    let tanggal = tanggalSekarang.getDate()
    let bulan = tanggalSekarang.getMonth()
    let namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][bulan]
    let tahun = tanggalSekarang.getFullYear()
    let jam = tanggalSekarang.getHours()
    let menit = tanggalSekarang.getMinutes()
    let detik = tanggalSekarang.getSeconds()
    let zonaWaktu = tanggalSekarang.getTimezoneOffset() / -60

    let name = document.getElementById('nama').value
    let date = document.getElementById('tanggal').value
    let laki = document.getElementById('gender').value
    let pesan1 = document.getElementById('pesan').value
    let combined = `
    




${namaHari} ${tanggal} ${namaBulan} ${tahun} ${jam}:${menit}:${detik} UTC${zonaWaktu}

Nama : ${name}
Tanggal Lahir: ${date}
Jenis Kelamin : ${laki}
Pesan : ${pesan1}` 
    document.getElementById('hasil').value = combined
})