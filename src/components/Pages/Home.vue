<template>
  <div class="w-full h-screen bg-gray-100">
    <div class="xs:px-8 lg:px-16">
      <!-- Welcome Section -->
      <div class="mt-16 mb-16 lg:h-24 mx-auto">
        <div class="text-4xl text-black font-medium">Hello Jordi!</div>
        <div class="text-2xl ">Welcome to your cryptocurrency dashboard</div>
      </div>

      <!-- Balance Section -->
      <div class="mt-16 block lg:flex  justify-between lg:h-24">
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl ">Balance</div>
          <div class="text-4xl lg:mt-4 text-black font-medium ">
            $3330.09
          </div>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl ">Coins</div>
          <div class="xs:mt-4 lg:mt-0">
            <img
              class="w-10 inline-block mr-2 align-middle"
              src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
              alt=""
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt=""
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt=""
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/5e03f0ae6bbe976e7c4580633ce02f89aadb869d338c371bfa10810217102287d4f36a6296752e6bd727f90f49625f13a47ab3781205e14aba143bc6e6220943/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt=""
            />
          </div>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl ">Today's Profit</div>
          <div class="lg:mt-4">
            <SvgIcon class="text-green-600 -ml-2 inline align-middle">
              <path
                class="heroicon-ui"
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </SvgIcon>
            <div
              class="align-middle inline text-4xl mt-2 text-black font-medium"
            >
              $198.32
            </div>
            <SvgIcon class="text-green-600 ml-2 inline align-middle">
              <path
                class="heroicon-ui"
                d="M8.7 14.7a1 1 0 0 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 11.42l-3.3 3.3z"
              />
            </SvgIcon>
            <div class="align-middle inline font-medium">4.10%</div>
          </div>
        </div>
        <div class="flex xs:flex-wrap lg:items-end">
          <div
            class="cursor-pointer font-medium mr-6 py-4 xs:px-6 lg:px-8 rounded-lg border-2"
          >
            <SvgIcon class="text-indigo-600 inline align-middle">
              <path
                class="heroicon-ui"
                d="M5.41 16H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0 4 4 0 0 1-4 4H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.4L5.4 16zM6 8a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4h12.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4L18.6 8H6z"
              />
            </SvgIcon>
            <div class="px-2 inline align-middle">Send Money</div>
          </div>
          <div
            class="cursor-pointer py-4 font-medium xs:px-6 lg:px-8 text-white rounded-lg bg-indigo-600 border-2 border-transparent"
          >
            <SvgIcon class="inline align-middle">
              <path
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </SvgIcon>
            <div class="px-2 inline align-middle">Buy Currency</div>
          </div>
        </div>
      </div>

      <!-- Following Graph's Section -->
      <div class="mt-16 py-6 px-6 block lg:flex  bg-white shadow-md text-left justify-between"
      >
        <div class="lg:flex-1 lg:mr-8 ">
          <div class="flex flex-row">
            <div class="flex-1  ">
              <span class=" text-xl font-medium text-black align-middle"
                >Bitcoin</span
              >
              <span class=" px-4 tracking-widest text-gray-500 align-middle"
                >BTC</span
              >
              <div class="">
                <span v-show="!loading" class=" text-xl font-medium align-middle">$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <SvgIcon class="text-red-600 ml-2 inline align-middle">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                />
              </SvgIcon>

              <div class="align-middle inline font-medium">1.30%</div>
            </div>
          </div>
          <div class="py-2 h-40 flex flex-row pr-8">

            <div id="chart" class="flex-1"></div>
          </div>
        </div>
        <div class="lg:flex-1 lg:mr-8 ">
          <div class="flex flex-row">
            <div class="flex-1  ">
              <span class=" text-xl font-medium text-black align-middle"
              >Bitcoin</span
              >
              <span class=" px-4 tracking-widest text-gray-500 align-middle"
              >BTC</span
              >
              <div class="">
                <span v-show="!loading" class=" text-xl font-medium align-middle">$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <SvgIcon class="text-red-600 ml-2 inline align-middle">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                />
              </SvgIcon>

              <div class="align-middle inline font-medium">1.30%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">

            <div id="chart2" class="flex-1"></div>
          </div>
        </div>
        <div class="lg:flex-1 lg:mr-8 ">
          <div class="flex flex-row">
            <div class="flex-1  ">
              <span class=" text-xl font-medium text-black align-middle"
              >Bitcoin</span
              >
              <span class=" px-4 tracking-widest text-gray-500 align-middle"
              >BTC</span
              >
              <div class="">
                <span v-show="!loading" class=" text-xl font-medium align-middle">$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <SvgIcon class="text-red-600 ml-2 inline align-middle">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                />
              </SvgIcon>

              <div class="align-middle inline font-medium">1.30%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">

            <div id="chart3" class="flex-1"></div>
          </div>
        </div>
        <div class="lg:flex-1  ">
          <div class="flex flex-row">
            <div class="flex-1  ">
              <span class=" text-xl font-medium text-black align-middle"
              >Bitcoin</span
              >
              <span class=" px-4 tracking-widest text-gray-500 align-middle"
              >BTC</span
              >
              <div class="">
                <span v-show="!loading" class=" text-xl font-medium align-middle">$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <SvgIcon class="text-red-600 ml-2 inline align-middle">
                <path
                  class="heroicon-ui"
                  d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                />
              </SvgIcon>

              <div class="align-middle inline font-medium">1.30%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">

            <div id="chart4" class="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../SvgIcon";
import axios from "axios";
import Highcharts from "highcharts";
export default {
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
  components: {
    SvgIcon
  },
    async mounted() {
        let today = new Date();
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
            `https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-08-01&end=${today}`
        );

        Promise.all([res1, res2])
            .then(values => {
                this.loading = false;
                this.data.labels = Object.keys(res2.data.bpi);
                this.data.datasets[0].values = Object.values(res2.data.bpi);
                this.data.currentValue = res1.data.bpi.USD.rate;
                this.data.currentValue = this.data.currentValue.replace(',','');
                this.data.currentValue = (parseFloat(this.data.currentValue)).toFixed(2);

                // Begins Chart Configuration
                const chart = Highcharts.chart("chart", {
                    chart: {
                        margin: [0, 0, 0, 0],
                        type: "spline",
                        style: {
                            fontFamily: "Gilroy",
                            fontWeight: 700
                        },
                        backgroundColor: "transparent"
                    },
                    plotOptions: {
                        spline: {
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
                            enabled: false,
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
                        gridLineColor: 'transparent',
                        tickLength: 0,
                        labels: {
                            enabled: false,
                        },

                        title: {
                            text: ""
                        }
                    },
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
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ],
                                    [
                                        1,
                                        Highcharts.Color("#F7931A")
                                              .setOpacity(1)
                                            .get("rgba")
                                    ]
                                ]
                            },

                        }
                    ]
                });
                const chart2 = Highcharts.chart("chart2", {
                    chart: {
                        margin: [0, 0, 0, 0],
                        type: "spline",
                        style: {
                            fontFamily: "Gilroy",
                            fontWeight: 700
                        },
                        backgroundColor: "transparent"
                    },
                    plotOptions: {
                        spline: {
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
                            enabled: false,
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
                        gridLineColor: 'transparent',
                        tickLength: 0,
                        labels: {
                            enabled: false,
                        },

                        title: {
                            text: ""
                        }
                    },
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
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ],
                                    [
                                        1,
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ]
                                ]
                            },

                        }
                    ]
                });
                const chart3 = Highcharts.chart("chart3", {
                    chart: {
                        margin: [0, 0, 0, 0],
                        type: "spline",
                        style: {
                            fontFamily: "Gilroy",
                            fontWeight: 700
                        },
                        backgroundColor: "transparent"
                    },
                    plotOptions: {
                        spline: {
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
                            enabled: false,
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
                        gridLineColor: 'transparent',
                        tickLength: 0,
                        labels: {
                            enabled: false,
                        },

                        title: {
                            text: ""
                        }
                    },
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
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ],
                                    [
                                        1,
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ]
                                ]
                            },

                        }
                    ]
                });
                const chart4 = Highcharts.chart("chart4", {
                    chart: {
                        margin: [0, 0, 0, 0],
                        type: "spline",
                        style: {
                            fontFamily: "Gilroy",
                            fontWeight: 700
                        },
                        backgroundColor: "transparent"
                    },
                    plotOptions: {
                        spline: {
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
                            enabled: false,
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
                        gridLineColor: 'transparent',
                        tickLength: 0,
                        labels: {
                            enabled: false,
                        },

                        title: {
                            text: ""
                        }
                    },
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
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ],
                                    [
                                        1,
                                        Highcharts.Color("#F7931A")
                                            .setOpacity(1)
                                            .get("rgba")
                                    ]
                                ]
                            },

                        }
                    ]
                });
                // Make the chart's extremes relative to the minimum
                /*chart.yAxis[0].setExtremes(
                    Math.min(...this.data.datasets[0].values),
                    null
                );*/
                // Ends Chart Configuration
            })
            .catch(err => {
                console.log(err);
            });
    },
};
</script>

<style></style>
