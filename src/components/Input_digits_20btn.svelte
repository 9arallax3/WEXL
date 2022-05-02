<script>
    export let usr_select=undefined;
    const MAX_BUTTON =20;
</script>


<!-- Markup area-->    
<div>
    {#each Array(MAX_BUTTON+1) as _, i}
        {#if ((i)%11 == 0)}
            <br>
        {/if}
        <button class="button button3" on:click={() => usr_select=i}>{i}</button>
    {/each}
</div>


<!-- Style area -->
<style>
    .button {
      border: none;
      color: white;
      padding: 8px 12px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 24px;
      margin: 4px 2px;
      transition-duration: 0.4s;
      cursor: pointer;
    }
    
    .button1 {
      background-color: white; 
      color: black; 
      border: 2px solid #4CAF50;
    }
    
    .button1:hover {
      background-color: #4CAF50;
      color: white;
    }
    
    .button2 {
      background-color: white; 
      color: black; 
      border: 2px solid rgb(131, 131, 131);
    }
    
    .button2:hover {
      background-color: #008CBA;
      color: white;
    }

    .button3 {
      background-color: lightskyblue ; 
      color: black; 
      border: 2px solid lightcoral;
    }
    
    .button3:hover {
      background-color: blueviolet;
      color: white;
    }
    
</style>
