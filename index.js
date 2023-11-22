
        const toggleCheckbox = document.getElementById('toggle');
        const colorPicker = document.getElementById('colorPicker');
        const body = document.body;

        toggleCheckbox.addEventListener('change', function () {
            if (toggleCheckbox.checked) {
                colorPicker.style.display = 'block';
            } else {
                colorPicker.style.display = 'none';
                body.style.backgroundColor = ''; 
            }
        });

        colorPicker.addEventListener('input', function () {
            body.style.backgroundColor = colorPicker.value;
        });
        function redirectToDrWait() {
            window.location.href = 'DrWait.html'
        }

        function redirectToTermine() {
            window.location.href = 'Termine.html'
        }
        function redirectToRezepte() {
            window.location.href = 'Rezepte.html'
        }
        function redirectToPatienten() {
            window.location.href = 'Patienten.html'
        }
        function redirectToJobs() {
            window.location.href = 'Jobs.html'
        }
        function redirectToLeistung() {
            window.location.href = 'Leistungsspektrum.html'
        }
        function redirectToFacharzt() {
            window.location.href = 'Facharzt.html'
        }
        function redirectToMasern() {
            window.location.href = 'Masern.html'
        }
        function redirectToBilder() {
            window.location.href = 'Bilder.html'
        }