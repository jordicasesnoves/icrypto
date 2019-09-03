<template>
  <div class="w-full h-screen bg-gray-100">
    <div class="xs:px-8 lg:px-16">
      <!-- Welcome Section -->
      <div class="mt-16 mb-16 lg:h-24 mx-auto">
        <div class="text-4xl text-black font-medium">Hello, Jordi!</div>
        <div class="text-2xl">Welcome to your cryptocurrency dashboard</div>
      </div>

      <!-- Balance Section -->
      <div class="mt-16 block lg:flex justify-between lg:h-24">
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Balance</div>
          <div class="text-4xl lg:mt-4 text-black font-medium">$3330.09</div>
        </div>
        <div class="lg:flex lg:flex-col w-32 lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Coins</div>
          <div class="xs:mt-4 lg:mt-0 relative h-12" v-if="!loading">
            <div v-for="(crypto,index) in cryptosFollowing" :key="crypto.id">
              <cryptoicon
                :symbol="crypto.symbol"
                ref="icons"
                class="w-12 h-12 absolute border-4 border-gray-100 rounded-full inline align-middle"
                :style="{ left: 34 * index + 'px', zIndex: -index + 100 }"
              />
            </div>
          </div>
          <div class="xs:mt-4 lg:mt-0 relative h-12" v-else>
            <span class="text-xl">Loading...</span>
          </div>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Today's Profit</div>
          <div class="lg:mt-4">
            <SvgIcon class="text-green-600 inline -ml-2 align-middle">
              <path
                class="heroicon-ui"
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </SvgIcon>
            <div class="align-middle inline text-4xl mt-2 mr-2 text-black font-medium">$198.32</div>

            <div class="align-middle text-green-600 inline font-medium">+4.10%</div>
          </div>
        </div>
        <div class="flex xs:flex-wrap lg:items-end">
          <div
            class="transition-normal block cursor-pointer font-medium mr-6 py-4 xs:px-6 lg:px-8 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:text-white hover:border-transparent hover:bg-indigo-600"
          >
            <SvgIcon class="inline align-middle">
              <path
                class="heroicon-ui"
                d="M5.41 16H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0 4 4 0 0 1-4 4H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.4L5.4 16zM6 8a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4h12.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4L18.6 8H6z"
              />
            </SvgIcon>
            <div class="px-2 inline align-middle">Send Money</div>
          </div>
          <div
            class="transition-normal block cursor-pointer py-4 font-medium xs:px-6 lg:px-8 text-white rounded-lg bg-indigo-600 border-2 border-transparent hover:text-indigo-600 hover:bg-transparent hover:border-indigo-600"
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
      <div v-if="!loading" class="my-16 block lg:flex">
        <a
          v-for="(crypto,index) in cryptosFollowing"
          v-bind:key="crypto.id"
          :class="{'ml-6': index !== 0, 'cursor-pointer':true, 'transition-normal':true, 'chart-card':true, 'lg:flex-1':true, 'xs:mb-6':true, 'rounded-lg':true, 'shadow-lg':true, 'bg-white':true}"
          href="#"
        >
          <div class="p-6">
            <div class="flex justify-between flex-row">
              <div class="self-center">
                <cryptoicon
                  :symbol="crypto.symbol"
                  class="cryptoimg w-6 mr-2 left-0 inline align-middle"
                />

                <span class="text-xl text-black align-middle">{{ crypto.name }}</span>
                <!--<span class="px-4 tracking-widest align-middle">{{ crypto.symbol}}</span>-->
              </div>
              <div class="self-center">
                <span class="pl-4 text-sm inline tracking-widest self-center">24h</span>
              </div>
            </div>
            <div class="flex mt-1 justify-between flex-row">
              <div
                v-show="!loading"
                class="inline text-2xl text-black font-medium align-middle"
              >$ {{ crypto.infoData.USD.PRICE }}</div>
              <!-- {inline: true, 'font-medium': true, 'self-center': true}, -->
              <div
                v-show="!loading"
                :class="[Math.sign(crypto.infoData.USD.CHANGEPCT24HOUR) == -1 ? 'text-red-600' : 'text-green-600',
              {'font-medium': true, 'inline': true, 'self-center': true}]"
              >{{ crypto.infoData.USD.CHANGEPCT24HOUR.toFixed(2) }}%</div>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-full">
              <apexchart
                v-if="!loadingGraphs"
                type="area"
                height="150px"
                width="100%"
                :options="crypto.chartOptions"
                :series="crypto.historicalHourly"
              />
            </div>
          </div>
        </a>
      </div>
      <div v-else class="mt-16 text-center block lg:flex rounded-lg bg-white shadow lg:h-64">
        <div class="p-6 text-center m-auto">
          <h1 class="text-3xl text-center">Loading...</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../SvgIcon";
import axios from "axios";
import apexchart from "vue-apexcharts";
import FastAverageColor from "fast-average-color";
import ColorThief from "colorthief/dist/color-thief.mjs";

export default {
  data() {
    return {
      selectedCurrency: "USD",
      hourlyStamps: null,
      cryptosFollowing: [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          infoData: null,
          historicalHourly: null,
          chartOptions: null
        },
        {
          id: 2,
          name: "Ethereum",
          symbol: "ETH",
          infoData: null,
          historicalHourly: null,
          chartOptions: null
        },
        {
          id: 3,
          name: "Litecoin",
          symbol: "LTC",
          infoData: null,
          historicalHourly: null,
          chartOptions: null
        }
      ],
      loading: false,
      loadingGraphs: true,
      series: [
        {
          name: "btc",
          data: [32.2, 10, 5, 14]
        }
      ]
    };
  },
  components: {
    SvgIcon,
    apexchart
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  async created() {
    console.log("created");

    let today = new Date();
    let today_year_ago = null;
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    let yyyy_ago = yyyy - 1;
    today_year_ago = `${yyyy_ago}-${mm}-${dd}`;

    // -> Desired format: let cryptoString = 'BTC,XRP,ETH'
    let cryptosStrig = "";
    this.cryptosFollowing.forEach((crypto, index, array) => {
      // Check to don't add comma at the last crypto symbol
      if (index === array.length - 1) {
        cryptosStrig = cryptosStrig + crypto.symbol;
      } else {
        cryptosStrig = cryptosStrig + crypto.symbol + ",";
      }
    });

    // Beginning of API calls
    this.loading = true;

    // 1st API call -> Get Cryptos Data
    const cryptosData = await axios
      .get("https://min-api.cryptocompare.com/data/pricemultifull", {
        params: {
          fsyms: cryptosStrig,
          tsyms: "USD,EUR"
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.cryptosFollowing.forEach(crypto => {
            crypto.infoData = res.data.RAW[crypto.symbol];
            crypto.chartOptions = {
              colors: ["#F7931A"],
              chart: {
                sparkline: {
                  enabled: true
                },
                toolbar: {
                  show: false
                }
              },
              legend: {
                show: false
              },
              dataLabels: {
                enabled: false
              },
              tooltip: {
                x: {
                  format: "dd MMM HH:mm"
                }
              },
              xaxis: {
                show: false,
                type: "datetime",
                categories: [],
                labels: {
                  show: false
                },
                tooltip: {
                  enabled: false
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                }
              },
              yaxis: {
                show: false,
                labels: {
                  show: true
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                }
              },
              grid: {
                show: false,
                padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
                }
              },
              stroke: {
                width: 3,
                curve: "smooth"
              }
            };

          });
        }
      })
      .catch(err => {
        console.log(err);
      });

    // 2nd API call -> Group of calls depending on the number of cryptosFollowing
    let promises = [];
    for (let i = 0; i < this.cryptosFollowing.length; i++) {
      promises.push(
        await axios.get("https://min-api.cryptocompare.com/data/histohour", {
          params: {
            fsym: this.cryptosFollowing[i].symbol,
            tsym: this.selectedCurrency,
            limit: 23
          }
        })
      );
    }
    // [3232,3232,32323,3232,3]

    // {
    //  name: '',
    //  data: [3232,3232,32323,3232,3]
    // }
    Promise.all(promises).then(res => {
      this.hourlyStamps = res[0].data.Data.map(dot => {
        let date = new Date(dot.time * 1000);
        let isoDate = date.toISOString();

        // Desired format -> "2018-09-19T14:00:00" -> ISO format
        return isoDate;
      });

      this.cryptosFollowing.forEach((crypto) => {
        crypto.chartOptions.xaxis.categories = this.hourlyStamps;
      })

      

      res.forEach((val, index) => {
        this.cryptosFollowing[index].historicalHourly = val.data.Data.map(
          dot => {
            return dot.close;
          }
        );
        this.cryptosFollowing[index].historicalHourly = [
          {
            name: this.cryptosFollowing[index].name,
            data: this.cryptosFollowing[index].historicalHourly
          }
        ];
      });
      this.loading = false;
      
      
    });
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");

    this.loadingGraphs = true;

    this.$watch('loading', () => {
      this.setGraphColors()
      this.loadingGraphs = false;
    })
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },

  computed: {
  },

  methods: {
    setGraphColors(){
      this.$refs.icons.forEach((icon, index) => {
        // Get the crypto main color, which is used in the circle fill from the coins svg icons
        let color = icon.$el.lastElementChild.childNodes["0"].attributes[3].nodeValue
        // Set the graph color
        this.cryptosFollowing[index].chartOptions.colors = [`${color}`]
      })
    }
  }
};
</script>

<style>
.chart-card:hover {
  transform: scale(1.05);
}
</style>
