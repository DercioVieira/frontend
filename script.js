function validateForm() {
    var movieName = document.getElementById('nome').value;
    if (!movieName.match(/[Filmes]{1,}/)) {
        alert('Por favor, insira um nome válido.');
        return false;
    }
    if (movieName.trim() === '') {
        alert('Por favor, insira um comentário.');
        return false;
    }
   
}