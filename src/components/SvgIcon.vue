<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    style="font-size: 1.5rem;"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
    class="fill-current"
  >
    <!--<title :id="iconName" lang="en">{{ iconName }}</title>-->
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
  },
};
</script>
