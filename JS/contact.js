function val() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let address = document.getElementById("alamat")
    let checkbox = document.getElementById("agree")

    if (name.value == "") {
        alert("Harap isi nama lengkap anda")
    } else if (name.value.length < 5) {
        alert("Nama lengkap harus lebih dari 4 karakter")
    } else if (email.value == "") {
        alert("Harap isi alamat email anda")
    } else if (!email.value.endsWith('@gmail.com')) {
        alert("Email harus menggunakan domain gmail")
    } else if (password.value == "") {
        alert("Harap isi kata sandi anda")
    } else if (password.value.length < 6) {
        alert("Harap isi kata sandi anda minimal 6 character")
    } else if (address.value == "") {
        alert("Harap isi alamat anda")
    } else if (!agree.checked) {
        alert("Harap centang kolom persetujuan")
    } else {
        alert("Berhasil")
    }
}