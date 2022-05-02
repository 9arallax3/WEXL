<script>
  export let object;
  export let click;
  console.log(object.category);
</script>

<ul>
  <li><h4>{object.catType}</h4></li>
  {#each object.components as obj, i}
    <li style="margin-bottom: 2px;">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        on:click={click(null, obj.comp)}
        style="background: {obj.comp == null
          ? '#ff000069'
          : '#00800069'} ;color: black;  padding : 2px 5px "
        >{object.category}.{i + 1} {obj.act_text}</a
      >
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
  }
  h4 {
    margin: 10px 0;
    font-size: 3rem;
    display: inline-block;
  }
  a {
    cursor: default;
  }
  a:hover {
    border-bottom: 1px solid black;
  }
</style>
