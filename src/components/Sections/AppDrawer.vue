<template>
  <div class="flex border-b bg-white">
    <div class="flex justify-betwen flex-row w-full xs:px-8 lg:px-16">
      <div class="mr-16 py-auto self-center">
        <a href="#" class="font-bold text-black text-2xl">iCrypto</a>
      </div>
      <div class="flex-1 xs:py-10 lg:py-0">
        <div class="xs:hidden lg:flex mr-4 items-center">
          <div class="flex font-medium">
            <a href="#" class="inline text-indigo-600 border-b-2 border-indigo-600 py-8 mr-8 text-center">
              <SvgIcon class="inline align-middle">
                <path
                  d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"
                />
              </SvgIcon>
              <span class="inline px-1 align-middle">Dashboard</span>
            </a>
            <a href="#" class="transition-normal inline border-b-2 border-transparent hover:border-gray-500 py-8 mr-8 text-center">
              <SvgIcon class="inline-block align-middle">
                <path
                  class="icon"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"
                />
              </SvgIcon>
              <span class="inline-block px-1 align-middle">Wallet</span>
            </a>
            <a href="#" class="transition-normal inline border-b-2 border-transparent hover:border-gray-500 py-8 mr-8 text-center">
              <SvgIcon class="inline-block align-middle">
                <path
                  class="heroicon-ui"
                  d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
                />
              </SvgIcon>
              <span class="inline-block px-1 align-middle">Prices</span>
            </a>
            <a href="#" class="transition-normal inline border-b-2 border-transparent hover:border-gray-500 py-8 mr-8 text-center">
              <SvgIcon class="inline-block align-middle">
                <path
                  class
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                />
              </SvgIcon>
              <span class="inline-block px-1 align-middle">Profile</span>
            </a>
          </div>
        </div>
      </div>
      <div class="self-center">
        <a href="#"
          class="transition-normal border-2 border-transparent hover:text-red-600 hover:bg-white hover:border-red-600  font-medium rounded-full bg-red-600 text-white w-full py-3 px-6"
        >
          <SvgIcon class="inline align-middle">
            <path
     
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
            />
          </SvgIcon>
          <div class="px-2 inline align-middle ">Log Out</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  name: "AppDrawer",
  components: {
    SvgIcon
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
nav {
  color: var(--text-color);
  //border-right: 1px solid var(--bg-accent-color);
  width: 17rem;
}

nav ul {
  font-size: 18px;
}

.icon-active {
  fill: var(--active-color);
}
</style>
