export class HandleChartCreation {
  constructor() {}

  handler() {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
        ],
        datasets: [
          {
            label: "Quantidade de entregas",
            data: [
              8, 42, 18, 14, 29, 7, 36, 50, 11, 47, 33, 5, 38, 15, 32, 19, 43,
              2, 45, 24, 31, 39, 10, 25, 70, 20, 49, 4, 22, 48, 13,
            ],
            borderWidth: 0,
            backgroundColor: "rgba(50, 154, 116, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            title: {
              display: true,
              text: "ENTREGAS",
              font: {
                weight: "bolder", // Peso da fonte (por exemplo, 'bold', 'normal', etc.)
                size: 12, // Tamanho da fonte em pixels
              },
              padding: {
                bottom: 20, // Distância do texto para o topo do eixo
              },
            },
            grid: {
              display: false,
            },

            beginAtZero: true,
          },
          x: {
            title: {
              display: true,
              text: "DIAS",
              font: {
                weight: "bolder", // Peso da fonte (por exemplo, 'bold', 'normal', etc.)
                size: 12, // Tamanho da fonte em pixels
              },
              padding: {
                top: 20, // Distância do texto para o topo do eixo
              },
            },
            grid: {
              display: false, // Configuração para desativar as linhas de grade no eixo X
            },
          },
        },
      },
    });
  }
}
