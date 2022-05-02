<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = num => () => value += num;
	const clear  = () => value = '';
	const submit = () => dispatch('submit');
</script>


<div class="phonepad">
	<div class="grid-keypad">
		<button class="btn toggle-btn" on:click={select(1)}>1</button>
		<button class="btn toggle-btn" on:click={select(2)}>2</button>
		<button class="btn toggle-btn" on:click={select(3)}>3</button>
		<button class="btn toggle-btn" on:click={select(4)}>4</button>
		<button class="btn toggle-btn" on:click={select(5)}>5</button>
		<button class="btn toggle-btn" on:click={select(6)}>6</button>
		<button class="btn toggle-btn" on:click={select(7)}>7</button>
		<button class="btn toggle-btn" on:click={select(8)}>8</button>
		<button class="btn toggle-btn" on:click={select(9)}>9</button>
		<button class="btn toggle-btn" disabled={!value} on:click={clear}>clear</button>
		<button class="btn toggle-btn" on:click={select(0)}>0</button>
		<button class="btn toggle-btn" disabled={!value} on:click={submit}>submit</button>
	</div>
</div>