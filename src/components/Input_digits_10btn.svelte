<script>
    export let usr_select=-1;

    export let max_button;
    let btnCnt = 10;

    function init() {
      btnCnt = max_button +1;
      console.log('KEYPAD: btn- ', max_button, ' bnt cnt-', btnCnt);
    }
    init();
</script>


<!-- Markup area-->    
<div>
  {#each Array(btnCnt) as _, i}
    {#if ((i)%11 == 0) && (i>1)}
        <br>
    {/if}
    <button class="button button2" on:click={() => usr_select=i}>{i}</button>
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
      background-color: white; 
      color: black; 
      border: 2px solid #008CBA;
    }
    
    .button3:hover {
      background-color: #008CBA;
      color: white;
    }
    
</style>
