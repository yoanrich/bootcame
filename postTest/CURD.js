let nik = [
    "162082",
    "162083",
    "162085",
    "162086"
];

let nama = [
    "ayu",
    "andini",
    "reza",
    "arabian"
];

let umur = [
    "20",
    "20",
    "24",
    "24"
];

function tampil() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>NIK</th><th>NAMA</th><th>UMUR</th><th>ACTION</th></tr>";
    for (let i = 0; i < nik.length; i++) {
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'edit (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'hapus (" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + nik[i] + "</td><td>" + nama[i] + "</td><td>" + umur[i] + "</td><td>" + btnEdit + "" + btnHapus + "</td ></tr > ";
    }
}

function tambah() {
    var input = document.querySelector("input[name=nik]");
    var input = document.querySelector("input[name=nama]");
    var input = document.querySelector("input[name=umur]");
    nik.push(input.value);
    nama.push(input.value);
    umur.push(input.value);
    input.value = "";
    tampil();

}

function edit(id) {
    let baru = prompt("Edit NIK", nik[id]);
    nik[id] = baru;
    baru = prompt("Edit NAMA", nama[id]);
    nama[id] = baru;
    baru = prompt("Edit Umur", umur[id]);
    umur[id] = baru;
    tampil();
}

function hapus(id) {
    nik.pop(id);
    tampil();
}
tampil();