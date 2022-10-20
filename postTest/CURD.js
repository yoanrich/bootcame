let data = [];

function tampil() {
    // console.log('fungsitampil');
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>NIK</th><th>NAMA</th><th>UMUR</th><th>ACTION</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class ='btn-edit' href = '#' onclick = 'edit (" + i + ")'>Edit</button>";
        let btnHapus = "<button class = 'btn-hapus' href = '#' onclick = 'hapus (" + i + ")'>Hapus</button>";
        j = i + 1;
        // console.log(data[i]);
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i].nik + "</td><td>" + data[i].nama + "</td><td>" + data[i].umur + "</td><td>" + btnEdit + "" + btnHapus + "</td ></tr > ";
    }
}

function tambah() {
    let inputnik = document.querySelector("input[name=nik]");
    let inputnama = document.querySelector("input[name=nama]");
    let inputumur = document.querySelector("input[name=umur]");
    // agar inputan tidak kosong tapi blm jadi
    if (data.inputnik === "") {
        alert("tidak boleh kosong")
    }
    else if (data.inputnama === "") {
        alert("tidak boleh kosong")
    } else if (data.inputni === "") {
        alert("tidak boleh kosong")
    } else {
        data.push({
            nik: parseInt(inputnik.value),
            nama: inputnama.value,
            umur: parseInt(inputumur.value)
        });
    }

    // mereset inputan
    inputnik.value = "";
    inputnama.value = "";
    inputumur.value = "";
    tampil();
}

function edit(id) {
    let baruNik = prompt("Edit NIK", data[id].nik);
    data[id].nik = baruNik;
    let baruNama = prompt("Edit NAMA", data[id].umur);
    data[id].nama = baruNama;
    let baruUmur = prompt("Edit Umur", data[id].umur);
    data[id].umur = baruUmur;
    tampil();
}

function hapus(id) {
    data.splice(id, 1);
    tampil();
}

tampil();