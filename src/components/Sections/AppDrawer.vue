<template>
  <div class="hidden lg:block fixed bg-white shadow-md">
    <nav class=" pt-16 pb-16 xs:hidden sm:block h-screen relative">
      <div class="mx-auto">
        <h1 class="px-8 font-bold text-black text-2xl">iCrypto</h1>
      </div>
      <div>
        <ul class="font-medium items-center pt-16">
          <li
            class="hover:text-black text-indigo-600 cursor-pointer px-8 mb-8 text-left"
          >
            <SvgIcon class="inline-block align-middle">
              <path
                d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"
              />
            </SvgIcon>
            <span class="inline-block px-2 align-middle">Dashboard</span>
          </li>
          <li class="hover:text-black cursor-pointer px-8 mb-8 text-left">
            <SvgIcon class="inline-block align-middle">
              <path
                class="icon"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z"
              />
            </SvgIcon>
            <span class="inline-block px-2 align-middle">Wallet</span>
          </li>
          <li class="hover:text-black cursor-pointer px-8 mb-8 text-left">
            <SvgIcon class="inline-block align-middle">
              <path
                class="heroicon-ui"
                d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
              />
            </SvgIcon>
            <span class="inline-block px-2 align-middle">Prices</span>
          </li>
          <li class="hover:text-black cursor-pointer px-8 mb-8 text-left">
            <SvgIcon class="inline-block align-middle">
              <path
                class=""
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </SvgIcon>
            <span class="inline-block px-2 align-middle">Profile</span>
          </li>
        </ul>
      </div>

      <div class="px-8 pb-16 text-center absolute inset-x-0 bottom-0">
        <div
          class="cursor-pointer font-medium text-base rounded-lg bg-red-600 text-white w-full py-4"
        >
          <SvgIcon class="inline align-middle">
            <path
              class="heroicon-ui"
              d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
            />
          </SvgIcon>
          <div class="px-2 inline align-middle">Log Out</div>
        </div>
      </div>
    </nav>
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
