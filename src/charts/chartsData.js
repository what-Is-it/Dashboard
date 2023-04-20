import { reactive } from "vue";

// 1
const data = reactive({
  labels: null,
  datasets: [
    {
      label: "Revenue",
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 25, 0, 300);

        gradient.addColorStop(0, "rgba(149, 76, 233, 1)");
        gradient.addColorStop(0.35, "rgba(149, 76, 233, 0.35)");
        gradient.addColorStop(1, "rgba(149, 76, 233, 0.2)");

        return gradient;
      },
      data: null,
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
    },
    {
      label: "Expenses",
      data: null,
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 25, 0, 300);

        gradient.addColorStop(1, "rgba(149, 76, 233, 0)");
        gradient.addColorStop(0.6, "rgba(149, 76, 233, 0.9)");
        gradient.addColorStop(0, "rgba(149, 76, 233, 0)");

        return gradient;
      },
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
    },
  ],
});
const options = reactive({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  layout: {
    padding: 15,
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "rgb(60, 180, 100)",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});
// 2
const data2 = reactive({
  labels: null,
  datasets: [
    {
      label: "Revenue",
      data: null,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
      pointRadius: 4,
      pointBorderColor: "rgb(0,0,0)",
      pointBackgroundColor: "rgb(255, 255, 255)",
    },
    {
      label: "Profit",
      data: null,
      borderColor: "rgb(139, 49, 191)",
      tension: 0.5,
      pointRadius: 4,
      pointBorderColor: "rgb(0,0,0)",
      pointBackgroundColor: "rgb(255, 255, 255)",
    },
  ],
});
const options2 = reactive({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  layout: {
    padding: 15,
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        boxWidth: 30,
        boxHeight: 0,
        fontColor: "rgb(60, 180, 100)",
        usePointStyle: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

// 3
const data3 = reactive({
  labels: null,
  datasets: [
    {
      label: "Revenue",
      data: null,
      fill: true,
      backgroundColor: (ctx) => {
        const canvas = ctx.chart.ctx;
        const gradient = canvas.createLinearGradient(0, 25, 0, 300);

        gradient.addColorStop(1, "rgba(149, 76, 233, 0.1)");
        gradient.addColorStop(0.6, "rgba(149, 76, 233, 0.9)");
        gradient.addColorStop(0, "rgba(149, 76, 233, 1)");

        return gradient;
      },
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
      pointRadius: 4,
      pointBorderColor: "rgb(0,0,0)",
      pointBackgroundColor: "rgb(255, 255, 255)",
    },
  ],
});
const options3 = reactive({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  layout: {
    padding: 15,
  },
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      labels: {
        boxWidth: 30,
        boxHeight: 0,
        fontColor: "rgb(60, 180, 100)",
        usePointStyle: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});

//4
const data4 = reactive({
  labels: null,
  datasets: [
    {
      label: "Revenue",
      data: null,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.5,
      pointRadius: 4,
      pointBorderColor: "rgb(0,0,0)",
      pointBackgroundColor: "rgb(255, 255, 255)",
    },
    {
      label: "Profit",
      data: null,
      borderColor: "rgb(139, 49, 191)",
      tension: 0.5,
      pointRadius: 4,
      pointBorderColor: "rgb(0,0,0)",
      pointBackgroundColor: "rgb(255, 255, 255)",
    },
  ],
});
const options4 = reactive({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  layout: {
    padding: 15,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
});
//5
const data5 = reactive({
  labels: ["Group A", "Group B"],
  datasets: [
    {
      label: "Groups",
      data: [600, 400],
      backgroundColor: ["rgb(127, 11, 169)", "rgb(229, 155, 255)"],
      hoverOffset: 10,
    },
  ],
});
const options5 = reactive({
  layout: {
    padding: 15,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
});
//6
const data6 = reactive({
  labels: "",
  datasets: [
    {
      label: "Dataset",
      data: null,
      backgroundColor: "rgb(229, 155, 255)",
    },
  ],
});
const options6 = reactive({
  layout: {
    padding: 15,
  },
  scales: {
    x: {
      ticks: {
        callback: function (value, index, values) {
          return "$" + value;
        },
      },
    },
    y: {
      ticks: {
        callback: function (value, index, values) {
          return "$" + value;
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          //   console.log(context.raw);
          return `Price: ${context.raw.x}$ and Expense: ${context.raw.y}$`;
        },
      },
    },
  },
});

export {
  data,
  options,
  data2,
  options2,
  data3,
  options3,
  data4,
  options4,
  data5,
  options5,
  data6,
  options6,
};
