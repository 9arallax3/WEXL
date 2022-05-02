<script>
	export let value = '';
	export let usr_select = -1;
	const MAX_BUTTON = 10;
</script>


<div class="phonepad">
	<div class="grid-keypad">
        {#each Array(MAX_BUTTON+1) as _, i}
			<button class="btn toggle-btn" on:click={() => usr_select=i}>
				{i}
			</button>
        {/each}
	</div>
</div>
