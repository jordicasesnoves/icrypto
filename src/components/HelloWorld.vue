<template>
  <div class="flex pt-32 pl-24 w-full" style="background-color: #ecf0f1;">
    <div class="wrapper">
      <div>
        <h1 class="inline-block antialiased text-black text-5xl -mt-4 font-bold">Featured songs</h1>
        <span class="link px-8 text-lg font-medium inline-block">Play All</span>
      </div>
      <div class="cover-list mt-12 block absolute">
        <div
          v-for="(song, index) in featuredSongs"
          :class="{'inline-block':true,'cover-item':true, 'pl-10':(index !== 0)}"
        >
          <div class="mb-2">
            <img class="rounded-lg shadow-2xl" :src="song.cover_url" width="200" height="200" alt />
          </div>
          <div>
            <p
              style="word-break: break-word; width: 200px; "
              class="flex text-3xl font-bold text-black"
            >{{ song.title }}</p>
            <span class>{{ song.artist }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      featuredSongs: [
        {
          title: `God's Plan`,
          artist: `Drake`,
          cover_url: `https://i.scdn.co/image/31fa21d18b56a7cb691392a05313d72906da7edf`
        },
        {
          title: `Sicko Mode lets gu`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        },
        {
          title: `Boy With Luv`,
          artist: `BTS`,
          cover_url: `https://m.media-amazon.com/images/I/61tzUrCb-rL._SS500_.jpg`
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
