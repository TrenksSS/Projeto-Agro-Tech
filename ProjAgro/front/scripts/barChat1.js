const ctx4 = document.getElementById('cha');
const chart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: dados.dias,
        datasets: [{
            label: "Orçamento",
            data: dados.orcamento,
            borderColor: 'rgba(60,179,0,113)',
            borderWidth: 2,
            backgroundColor: 'rgba(0,255,127)',
            borderRadius: 5,
            borderSkipped: false,
        },
        {
            label: "Gastos",
            data: dados.gastos,
            borderColor: 'rgba(100,100,200,100)',
            borderWidth: 2,
            backgroundColor: 'rgba(100,100,200,0.5)',
            borderRadius: Number.MAX_VALUE,

        }],
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gastos diarios'
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                stacked: true
            }
        }
    }
});
