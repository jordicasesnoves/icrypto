<template>
  <a :class="classObject" :href="href">
    <SvgIcon v-if="icon && iconPos == 'left'" class="inline align-middle">
      <slot name="iconPath"></slot>
    </SvgIcon>
    <div class="px-1 inline align-middle">
      <slot>Click me</slot>
    </div>
		 <SvgIcon v-if="icon && iconPos == 'right'" class="inline align-middle">
      <slot name="iconPath"></slot>
    </SvgIcon>
  </a>
</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  name: "Button",
  components: {
    SvgIcon
  },
  props: {
		size: {
			type: String,
			default: 'normal'
		},
    color: {
      type: String,
      default: "blue"
    },
    icon: {
      type: Boolean,
      default: false
		},
		iconPos: {
			type: String,
			default: 'left'
		},
    outlined: {
      type: Boolean,
      default: false
    },
    textButton: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: "#"
    }
  },
  computed: {
    // Quick reminder: all the classes used are from TailwindCSS
    classObject() {
      return {
        // Always active classes
        "transition-normal": true,
        block: true,
        "cursor-pointer": true,
        "font-medium": true,
        "rounded-lg": true,
				"border-2": true,
				

        "py-3": this.size == 'normal',
				"px-8": this.size == 'normal' && !this.textButton,
				"py-2": this.size == 'small',
				"px-6": this.size == 'small' && !this.textButton,
				"px-0": this.textButton,

        // Cuando es textButton = true -> bg-transparent
        // Dynamic classes
        "bg-red-600": !this.outlined && this.color == "red" && !this.textButton,
        "bg-blue-600": !this.outlined && this.color == "blue" && !this.textButton,
        "bg-white": this.outlined && !this.textButton,
        "bg-transparent": this.textButton,
        "border-indigo-600": this.color == "blue" && this.outlined,
        "border-red-600": this.color == "red" && this.outlined,
        "border-transparent": !this.outlined,
        "text-indigo-600": this.outlined && this.color == "blue" && !this.textButton,
        "text-red-600": this.outlined && this.color == "red" && !this.textButton,
				"text-white": !this.outlined && !this.textButton ,
				"text-gray-600": this.textButton,
        "hover:bg-indigo-600": this.outlined && this.color == "blue" && !this.textButton,
        "hover:bg-red-600": this.outlined && this.color == "red" && !this.textButton,
        "hover:bg-white": !this.outlined && !this.textButton,
        "hover:border-transparent": !this.outlined && !this.textButton,
        "hover:border-indigo-600": !this.outlined && this.color == "blue" && !this.textButton,
        "hover:border-red-600": !this.outlined && this.color == "red" && !this.textButton,
        "hover:text-white": this.outlined,
        "hover:text-indigo-600": !this.outlined && this.color == "blue",
        "hover:text-red-600": !this.outlined && this.color == "red"
      };
		},
  }
};
</script>