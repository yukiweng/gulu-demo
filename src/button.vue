<template>
<button class="g-button">按钮</button>	
</template>

<script>
	export default {
		name:'g-button'
	}
</script>

<style lang="scss">
	.g-button{
		height: var(--button-height);
		font-size: var(--font-size);
		padding:0 1em;
		color:var(--color);
		background: var(--button-bg);
		border:1px solid var(--border-color);
		border-radius: var(--border-radius);
		&:hover{
			border-color:var(--border-hover-color);
		};
		&:active{
			background: var(--button-active-bg);
		} 

	}

</style>