<template>
  <a :class="classObject" :href="href">
    <SvgIcon v-if="icon" class="inline align-middle">
      <slot name="iconPath"></slot>
    </SvgIcon>
    <div class="px-1 inline align-middle">
      <slot>Click me</slot>
    </div>
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
    color: {
      type: String,
      default: 'blue'
		},
		icon: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			default: '#'
		}
	},
	computed: {
		// Quick reminder: all the classes used are from TailwindCSS
		classObject(){
			return {
				// Always active classes
				'transition-normal': true,
				'block': true,
				'cursor-pointer': true,
				'font-medium': true,
				'rounded-lg': true,
				'border-2': true,
				'py-3': true,
				'px-8': true,

				// Dynamic classes
				'bg-red-600': !this.outlined && this.color == 'red',
				'bg-blue-600': !this.outlined && this.color == 'blue',
				'bg-white': this.outlined,
				'border-indigo-600': this.color == 'blue' && this.outlined,
				'border-red-600': this.color == 'red' && this.outlined,
				'border-transparent': !this.outlined,
				'text-indigo-600': this.outlined && this.color == 'blue' ,
				'text-red-600': this.outlined && this.color == 'red',
				'text-white': !this.outlined,
				'hover:bg-indigo-600': this.outlined && this.color == 'blue',
				'hover:bg-red-600': this.outlined && this.color == 'red',
				'hover:bg-white': !this.outlined,
				'hover:border-transparent': !this.outlined,
				'hover:border-indigo-600': !this.outlined && this.color == 'blue',
				'hover:border-red-600': !this.outlined && this.color == 'red',
				'hover:text-white': this.outlined,
				'hover:text-indigo-600': !this.outlined && this.color == 'blue',
				'hover:text-red-600': !this.outlined && this.color == 'red',	
			}
		}
	}
};
</script>