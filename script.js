document.addEventListener('DOMContentLoaded', () => {
    const addMovieForm = document.getElementById('addMovieForm');
    const movieTableBody = document.querySelector('#movieTable tbody');
    const addMovieBtn = document.getElementById('addMovieBtn');
    const warningMessage = document.getElementById('warningMessage');

    addMovieBtn.addEventListener('click', () => {
        const titleInput = document.getElementById('title');
        const genreSelect = document.getElementById('genre');
        const yearInput = document.getElementById('year');
        const classificationSelect = document.getElementById('classification');

        const titulo = titleInput.value.trim();
        const genero = genreSelect.value;
        const año = parseInt(yearInput.value);
        const clasificacion = classificationSelect.value;

        if (!titulo || !genero || isNaN(año) || año < 1900 || !clasificacion) {
            warningMessage.style.display = 'block';
            return;
        }

        warningMessage.style.display = 'none';

        const newRow = movieTableBody.insertRow();

        let titleCell = newRow.insertCell();
        titleCell.textContent = titulo;

        let genreCell = newRow.insertCell();
        genreCell.textContent = genero;

        let yearCell = newRow.insertCell();
        yearCell.textContent = año;

        let classificationCell = newRow.insertCell();
        classificationCell.textContent = clasificacion;
        classificationCell.classList.add(`${clasificacion.toLowerCase().replace('+', 'plus')}-hover`);

        addMovieForm.reset();
    });

    movieTableBody.addEventListener('mouseover', (event) => {
        const targetCell = event.target;
        if (targetCell.tagName === 'TD' && targetCell.cellIndex === 3) {
            const classification = targetCell.textContent.toLowerCase().replace('+', 'plus');
            targetCell.classList.add(`${classification}-hover`);
        }
    });

    movieTableBody.addEventListener('mouseout', (event) => {
        const targetCell = event.target;
        if (targetCell.tagName === 'TD' && targetCell.cellIndex === 3) {
            const classification = targetCell.textContent.toLowerCase().replace('+', 'plus');
            targetCell.classList.remove(`${classification}-hover`);
        }
    });
});
