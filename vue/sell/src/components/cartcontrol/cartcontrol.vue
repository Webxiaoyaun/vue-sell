<template>
<div class="cartcontrol">
	<transition name="move">
		<div class="cart-decrease" v-show="food.count>0" :class="{'move-transition':food.count>0}" @click.stop.prevent="decreaseCart($event)">
			<span class="inner icon-remove_circle_outline"></span>
		</div>	
	</transition>
	<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
	<div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
</div>
</template>

<script>
import Vue from 'vue';
export default {
  props:{
  	food:{
  		type:Object
  	}
  },
  methods:{
  	addCart(event) {
  		//防止多次被点击
  		if(!event._constructed){
  			return;
  		}
  		if(!this.food.count){
  			Vue.set(this.food,'count',1)
  		}else{
  			this.food.count++
  		}
  		this.$emit('add', event.target);
  	},
  	decreaseCart(event) {
  		if(!event._constructed){
  			return;
  		}
  		if(this.food.count){
  			this.food.count--
  		}
  	}
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size 0
		.cart-decrease
			display inline-block
			padding 6px
			-webkit-transition all 0.3s linear
			&.move-transition
				opacity 1
				-webkit-transform translate3D(0,0,0)
			.inner
				display inline-block
				font-size 24px
				line-height 24px
				color rgb(0,160,220)
				-webkit-transition all 0.3s linear
				-webkit-tranform rotate(0)
			&.move-leave-active,&.move-enter-active
				opacity 0
				-webkit-transform translate3D(24px,0,0)
			.inner
				-webkit-tranform rotate(180deg)
		.cart-count
			display inline-block
			vertical-align top
			width 12px
			padding-top 6px
			line-height 24px
			text-align center
			font-size 10px
			color rgb(147,153,159)
		.cart-add
			display inline-block
			color rgb(0,160,220)
			padding 6px
			line-height 24px
			font-size 24px
			
			
			
</style>