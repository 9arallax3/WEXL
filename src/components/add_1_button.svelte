<script>
	import {flip} from 'svelte/animate';
	
    let horizontal = false;
    let next = 1;
	let list = [];
	const addItem = () => list = [next++, ...list];
	const removeItem = number => list = list.filter(n => n !== number);
	const options = {};
</script>

<label>
  Horizontal
  <input type="checkbox" bind:checked={horizontal} />
</label>

<button on:click={addItem} 
    style="background-color: grey;"
    type="button" class="btn toggle-btn"
>
    Add
</button>

{#each list as n (n)}
  <div animate:flip={options} class:horizontal class="container">
	  <button on:click={() => removeItem(n)} type="button" class="btn toggle-btn" style="background-color:SlateGrey;">{n}</button>
  </div>
{/each}

<style>
	.container {
		width: fit-content; /* a fix */
	}
	.horizontal {
		display: inline-block;
		margin-left: 10px;
	}
</style>