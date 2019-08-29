<template>
  <div class="w-full h-screen bg-gray-100">
    <div class="xs:px-8 lg:px-16">
      <!-- Welcome Section -->
      <div class="mt-16 mb-16 lg:h-24 mx-auto">
        <div class="text-4xl text-black font-medium">Hello Jordi!</div>
        <div class="text-2xl">Welcome to your cryptocurrency dashboard</div>
      </div>

      <!-- Balance Section -->
      <div class="mt-16 block lg:flex justify-between lg:h-24">
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Balance</div>
          <div class="text-4xl lg:mt-4 text-black font-medium">$3330.09</div>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Coins</div>
          <div class="xs:mt-4 lg:mt-0">
            <img
              class="w-10 inline-block mr-2 align-middle"
              src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
              alt
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt
            />
            <img
              class="w-10 inline-block mx-2 align-middle"
              src="https://dynamic-assets.coinbase.com/5e03f0ae6bbe976e7c4580633ce02f89aadb869d338c371bfa10810217102287d4f36a6296752e6bd727f90f49625f13a47ab3781205e14aba143bc6e6220943/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
              alt
            />
          </div>
        </div>
        <div class="lg:flex lg:flex-col lg:justify-between xs:my-6 lg:my-0">
          <div class="text-2xl">Today's Profit</div>
          <div class="lg:mt-4">
            <SvgIcon class="text-green-600 -ml-2 inline align-middle">
              <path
                class="heroicon-ui"
                d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
              />
            </SvgIcon>
            <div class="align-middle inline text-4xl mt-2 text-black font-medium">$198.32</div>

            <div class="align-middle text-green-600 inline font-medium">+ 4.10%</div>
          </div>
        </div>
        <div class="flex xs:flex-wrap lg:items-end">
          <div class="cursor-pointer font-medium mr-6 py-4 xs:px-6 lg:px-8 rounded-lg border-2">
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
      <div
        v-if="!loading"
        class="mt-16 py-8 block lg:flex rounded-lg bg-white shadow-md "
      >
        <div  v-for="(crypto,name,index) of crpytosFollowing" v-bind:key="crypto.id" class="lg:flex-1 px-8 ">
          <div class="flex flex-row">
            <div class="flex-1">
              <span class="text-xl font-medium text-black align-middle">{{ crypto.name }}</span>
              <span class="px-4 tracking-widest text-gray-500 align-middle">{{ crypto.symbol}}</span>
              <div class>
                <span
                  v-show="!loading"
                  class="text-xl font-medium align-middle"
                >$ {{ crypto.currentValue.USD }}</span>
              </div>
            </div>
            <div class="pr-8">
              <div class="align-middle inline text-green-600 font-medium">+1.30%</div>
            </div>
          </div>
          <div class="py-2 h-56 flex flex-row">
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
        <!--<div class="lg:flex-1 lg:mr-8">
          <div class="flex flex-row">
            <div class="flex-1">
              <span class="text-xl font-medium text-black align-middle">Bitcoin</span>
              <span class="px-4 tracking-widest text-gray-500 align-middle">BTC</span>
              <div class>
                <span
                  v-show="!loading"
                  class="text-xl font-medium align-middle"
                >$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <div class="align-middle inline text-green-600 font-medium">+5.20%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">
            <div id="chart2" class="flex-1"></div>
          </div>
        </div>
        <div class="lg:flex-1 lg:mr-8">
          <div class="flex flex-row">
            <div class="flex-1">
              <span class="text-xl font-medium text-black align-middle">Bitcoin</span>
              <span class="px-4 tracking-widest text-gray-500 align-middle">BTC</span>
              <div class>
                <span
                  v-show="!loading"
                  class="text-xl font-medium align-middle"
                >$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <div class="align-middle inline text-red-600 font-medium">-10.60%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">
            <div id="chart3" class="flex-1"></div>
          </div>
        </div>
        <div class="lg:flex-1">
          <div class="flex flex-row">
            <div class="flex-1">
              <span class="text-xl font-medium text-black align-middle">Bitcoin</span>
              <span class="px-4 tracking-widest text-gray-500 align-middle">BTC</span>
              <div class>
                <span
                  v-show="!loading"
                  class="text-xl font-medium align-middle"
                >$ {{ data.currentValue }}</span>
              </div>
            </div>
            <div class="pr-8">
              <div class="align-middle inline text-green-600 font-medium">+0.80%</div>
            </div>
          </div>
          <div class="mt-2 mb-16 h-32 flex flex-row pr-8">
            <div id="chart4" class="flex-1"></div>
          </div>
        </div>-->
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
          currentValue: null
        },
        {
           id: 2,
          name: "Ethereum",
          symbol: "ETH",
          currentValue: null
        },
        {
           id: 3,
          name: "Ripple",
          symbol: "XRP",
          currentValue: null
        },
        {
           id: 4,
          name: "Dash",
          symbol: "DASH",
          currentValue: null
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
          categories: ["2018-09-19T00:00:00", "2018-09-20T00:00:00","2018-09-21T00:00:00","2018-09-22T00:00:00"],
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
          //curve: "smooth"
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
    var today_year_ago = null;
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    var yyyy_ago = yyyy - 1;
    today_year_ago = `${yyyy_ago}-${mm}-${dd}`;

    var cryptosStrig = "";
    this.crpytosFollowing.forEach((crypto, index, array) => {
      if (index === array.length - 1) {
        cryptosStrig = cryptosStrig + crypto.symbol;
      } else {
        cryptosStrig = cryptosStrig + crypto.symbol + ",";
      }
    });
    this.loading = true
    const cryptosCurrentValues = await axios
      .get("https://min-api.cryptocompare.com/data/pricemulti", {
        params: {
          fsyms: cryptosStrig,
          tsyms: "USD,EUR"
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.crpytosFollowing.forEach(crypto => {
            crypto.currentValue = res.data[crypto.symbol];
          });
          this.loading = false
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>
