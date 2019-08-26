<template>
  <div class="pt-32 w-full" style="background-color: #F2F3FB;">
    <div class="wrapper justify-between md:flex">
      <div class="px-16 text-5xl" v-show="loading">Loading...</div>
      <div class="px-16 xs:w-full md:w-1/2" v-show="!loading">
        <div>
          <img
            class="mr-4 w-12 h-12 inline align-middle"
            src="https://static.coindesk.com/images/cryptoeconomics/icons/svg/btc.edae64fc.svg"
            alt
          />
          <span class="align-middle text-4xl text-black mr-4">Bitcoin</span>
          <span class="align-middle text-xl">(BTC)</span>
          <br />
          <span class="ml-16 align-middle text-4xl text-black font-bold">{{ data.currentValue }} USD</span>
        </div>

        <div class="mt-4" id="chart"></div>
        <!--<button @click="addData()">Add Data</button>-->
      </div>
      <div class="px-16 xs:w-full md:w-1/2" v-show="!loading">
        <div>
          <img
            class="mr-4 w-12 h-12 inline align-middle"
            src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
            alt
          />
          <span class="align-middle text-4xl text-black mr-4">Ethereum</span>
          <span class="align-middle text-xl">(ETH)</span>
          <br />
          <span class="ml-16 align-middle text-4xl text-black font-bold">{{ data.currentValue }} USD</span>
        </div>

        <div class="mt-4" id="chart2"></div>
        <!--<button @click="addData()">Add Data</button>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";
import Highcharts from "highcharts";

export default {
  components: {
    Chart
  },
  data() {
    return {
      loading: false,
      data: {
        currentValue: null,
        labels: null,
        datasets: [
          {
            name: "Bitcoin",
            type: "line",
            values: null
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    addData() {
      let label = "";
      let valueFromEachDataset = [Math.floor(Math.random() * 80 + 1)];

      this.chart.addDataPoint(label, valueFromEachDataset);
    }
  },
  async mounted() {
    var today = new Date();
    var today_year_ago = null;
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    var yyyy_ago = yyyy - 1;
    today_year_ago = `${yyyy_ago}-${mm}-${dd}`;

    // Get 1 year Bitcoin history!
    this.loading = true;
    const res1 = await axios.get(
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );
    const res2 = await axios.get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${today_year_ago}&end=${today}`
    );

    Promise.all([res1, res2])
      .then(values => {
        this.loading = false;
        this.data.labels = Object.keys(res2.data.bpi);
        this.data.datasets[0].values = Object.values(res2.data.bpi);
        this.data.currentValue = res1.data.bpi.USD.rate;

        var d = new Date();
        var pointStart = d.getTime();

        // Begins Chart Configuration

        const chart = Highcharts.chart("chart", {
          chart: {
            type: "areaspline",
            style: {
              fontFamily: "Gilroy",
              fontWeight: 700
            },
            backgroundColor: "#F2F3FB"
          },
          plotOptions: {
            areaspline: {
              marker: {
                enabled: false
              }
            }
          },
          title: {
            text: ""
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          tooltip: {
            backgroundColor: "#FFFFFF",
            borderColor: "transparent",
            shadow: true,
            padding: 16,
            className: "shadow-lg",
            pointFormat: "$ {point.y:.2f}",
            formatter: function() {
              return `<span class="text-lg">$ ${this.y.toFixed(
                2
              )}</span><br> <span style="color: #767676;">${this.x}</span>`;
            }
          },
          xAxis: {
            categories: this.data.labels.map(x => x.substring(0, 10)),
            labels: {
              step: 90,
              formatter() {
                //console.log(this.value.substring(0,2));
                var month = "";
                var year = this.value.substring(2, 4);
                switch (this.value.substring(5, 7)) {
                  case "01":
                    month = "Jan";
                    break;
                  case "02":
                    month = "Feb";
                    break;
                  case "03":
                    month = "Mar";
                    break;
                  case "04":
                    month = "Apr";
                    break;
                  case "05":
                    month = "May";
                    break;
                  case "06":
                    month = "Jun";
                    break;
                  case "07":
                    month = "Jul";
                    break;
                  case "08":
                    month = "Aug";
                    break;
                  case "09":
                    month = "Sep";
                    break;
                  case "10":
                    month = "Oct";
                    break;
                  case "11":
                    month = "Nov";
                    break;
                  case "12":
                    month = "Dec";
                    break;
                }

                return `${month} '${year}`;
              }
            }
          },
          yAxis: {
            title: {
              text: ""
            }
          },
          //data: this.data.datasets[0].values
          series: [
            {
              name: "Bitcoin",
              data: this.data.datasets[0].values,
              color: {
                linearGradient: {
                  x1: 1,
                  y1: 0,
                  x2: 0,
                  y2: 0
                },
                stops: [
                  [
                    0,
                    Highcharts.Color("#FC4474")
                      .setOpacity(1)
                      .get("rgba")
                  ],
                  [
                    1,
                    Highcharts.Color("#FC4474")
                      .setOpacity(1)
                      .get("rgba")
                  ]
                ]
              },
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 1,
                  y2: 1
                },
                stops: [
                  [
                    0,
                    Highcharts.Color("#FC4474")
                      .setOpacity(0.4)
                      .get("rgba")
                  ],
                  [
                    1,
                    Highcharts.Color("#FC4474")
                      .setOpacity(0)
                      .get("rgba")
                  ]
                ]
              }
            }
          ]
        });
        const chart2 = Highcharts.chart("chart2", {
          chart: {
            type: "areaspline",
            style: {
              fontFamily: "Gilroy",
              fontWeight: 700
            },
            backgroundColor: "#F2F3FB"
          },
          plotOptions: {
            areaspline: {
              marker: {
                enabled: false
              }
            }
          },
          title: {
            text: ""
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          tooltip: {
            backgroundColor: "#FFFFFF",
            borderColor: "transparent",
            shadow: true,
            padding: 16,
            className: "shadow-lg",
            pointFormat: "$ {point.y:.2f}",
            formatter: function() {
              return `<span class="text-lg">$ ${this.y.toFixed(
                2
              )}</span><br> <span style="color: #767676;">${this.x}</span>`;
            }
          },
          xAxis: {
            categories: this.data.labels.map(x => x.substring(0, 10)),
            labels: {
              step: 90,
              formatter() {
                //console.log(this.value.substring(0,2));
                var month = "";
                var year = this.value.substring(2, 4);
                switch (this.value.substring(5, 7)) {
                  case "01":
                    month = "Jan";
                    break;
                  case "02":
                    month = "Feb";
                    break;
                  case "03":
                    month = "Mar";
                    break;
                  case "04":
                    month = "Apr";
                    break;
                  case "05":
                    month = "May";
                    break;
                  case "06":
                    month = "Jun";
                    break;
                  case "07":
                    month = "Jul";
                    break;
                  case "08":
                    month = "Aug";
                    break;
                  case "09":
                    month = "Sep";
                    break;
                  case "10":
                    month = "Oct";
                    break;
                  case "11":
                    month = "Nov";
                    break;
                  case "12":
                    month = "Dec";
                    break;
                }

                return `${month} '${year}`;
              }
            }
          },
          yAxis: {
            title: {
              text: ""
            }
          },
          //data: this.data.datasets[0].values
          series: [
            {
              name: "Bitcoin",
              data: this.data.datasets[0].values,
              color: {
                linearGradient: {
                  x1: 1,
                  y1: 0,
                  x2: 0,
                  y2: 0
                },
                stops: [
                  [
                    0,
                    Highcharts.Color("#FC4474")
                      .setOpacity(1)
                      .get("rgba")
                  ],
                  [
                    1,
                    Highcharts.Color("#FC4474")
                      .setOpacity(1)
                      .get("rgba")
                  ]
                ]
              },
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 1,
                  y2: 1
                },
                stops: [
                  [
                    0,
                    Highcharts.Color("#FC4474")
                      .setOpacity(0.4)
                      .get("rgba")
                  ],
                  [
                    1,
                    Highcharts.Color("#FC4474")
                      .setOpacity(0)
                      .get("rgba")
                  ]
                ]
              }
            }
          ]
        });
        // Make the chart's extremes relative to the minimum
        chart.yAxis[0].setExtremes(
          Math.min(...this.data.datasets[0].values),
          null
        );
        // Ends Chart Configuration
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>