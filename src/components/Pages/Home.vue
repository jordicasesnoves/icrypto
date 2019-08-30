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
            <div v-for="(crypto,index) in crpytosFollowing" :key="crypto.id">
              <img
                :style="{ left: 30 * index + 'px', zIndex: -index + 100 }"
                class="w-12 absolute border-4 border-gray-100 rounded-full inline align-middle"
                :src="`https://www.cryptocompare.com${crypto.infoData.USD.IMAGEURL}`"
                alt
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
      <div v-if="!loading" class="mt-16 block lg:flex rounded-lg bg-white shadow">
        <div
          v-for="(crypto,name,index) of crpytosFollowing"
          v-bind:key="crypto.id"
          class="lg:flex-1 p-6"
        >
          <div class="flex justify-between flex-row">
            <div class="self-center">
              <img
                class="w-6 mr-2 left-0 inline align-middle"
                :src="`https://www.cryptocompare.com${crypto.infoData.USD.IMAGEURL}`"
                alt
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
          <div class="h-56 flex flex-row">
            <div id="chart" class="flex-1">
              <apexchart
                v-if="!loading"
                type="line"
                height="224px"
                :options="chartOptions"
                :series="series"
              />
            </div>
          </div>
        </div>
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

export default {
  data() {
    return {
      crpytosFollowing: [
        {
          id: 1,
          name: "Bitcoin",
          symbol: "BTC",
          infoData: null
        },
        {
          id: 2,
          name: "Ethereum",
          symbol: "ETH",
          infoData: null
        },
        {
          id: 3,
          name: "Ripple",
          symbol: "XRP",
          infoData: null
        },
        {
          id: 4,
          name: "Litecoin",
          symbol: "LTC",
          infoData: null
        }
      ],
      loading: false,
      series: [
        {
          name: "series1",
          data: [32, 10, 5, 14]
        }
      ],
      chartOptions: {
        colors: ["#F7931A", "#FDEAD3"],
        chart: {
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
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00",
            "2018-09-20T00:00:00",
            "2018-09-21T00:00:00",
            "2018-09-22T00:00:00"
          ],
          labels: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        grid: {
          show: false
        },
        stroke: {
          width: 3,
          curve: "smooth"
        },
        fill: {
          colors: ["#F7931A", "#FDEAD3"],
          type: "gradient"
        }
      }
    };
  },
  components: {
    SvgIcon,
    apexchart
  },
  async created() {
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
    this.crpytosFollowing.forEach((crypto, index, array) => {

      // Check to don't add comma at the last crypto symbol 
      if (index === array.length - 1) {
        cryptosStrig = cryptosStrig + crypto.symbol;
      } else {
        cryptosStrig = cryptosStrig + crypto.symbol + ",";
      }
    });
    this.loading = true;
    const cryptosCurrentValues = await axios
      .get("https://min-api.cryptocompare.com/data/pricemultifull", {
        params: {
          fsyms: cryptosStrig,
          tsyms: "USD,EUR"
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.crpytosFollowing.forEach(crypto => {
            crypto.infoData = res.data.RAW[crypto.symbol];
          });
          setTimeout(() => {
            this.loading = false;
          }, 2000);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    styleObject(index) {
      let obj = {
        left: 36 * index + "px"
      };
      return obj;
    }
  }
};
</script>

<style>
</style>
