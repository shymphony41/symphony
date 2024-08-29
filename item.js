// Configurar gráfico con Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hombre', 'Mujer'],
        datasets: [{
            label: '% de personas afectadas',
            data: [30, 40],
            backgroundColor: ['#00796b', '#ff7043'],
            borderColor: ['#004d40', '#e64a19'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            onComplete: function() {
                document.querySelector('.loading').style.display = 'none';
            }
        }
    }
});
