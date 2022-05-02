<script>
  import { act_list } from "./components/menu";
  import MenuItems from "./MenuItems.svelte";

  let componentName;
  let showMenu = "GradeI";

  const handleClick = (parameter , compName) => () => {
    showMenu = parameter;
    componentName = compName;
  };
</script>

<div
  style="height: 100vh; display: flex; flex-direction: column; width : 100vw;"
>
  <div class="header">
    <h2>WEXL</h2>
  </div>
  <div class="content">
    <div class="menu">
      <ul>
        <li><h4 on:click={handleClick("GradeI", null)}>Menu</h4></li>
        <li><button on:click={handleClick("GradeI", null)}>Grade I</button></li>
        <li>
          <button on:click={handleClick("GradeII", null)}>Grade II</button>
        </li>
        <li>
          <button on:click={handleClick("GradeIII", null)}>Grade III</button>
        </li>
        <li>
          <button on:click={handleClick("GradeIV", null)}>Grade IV</button>
        </li>
        <li><button on:click={handleClick("GradeV", null)}>Grade V</button></li>
      </ul>
    </div>
    <div class="main">
      {#if showMenu === "GradeI"}
        {#each Array(Object.keys(act_list.Class1).length) as _, i}
          <MenuItems
            object={Object.values(act_list.Class1)[i]}
            click={handleClick}
          />
        {/each}
      {:else if showMenu === "GradeII"}
        {#each Array(Object.keys(act_list.Class2).length) as _, i}
          <MenuItems
            object={Object.values(act_list.Class2)[i]}
            click={handleClick}
          />
        {/each}
      {:else if showMenu === "GradeIII"}
        {#each Array(Object.keys(act_list.Class3).length) as _, i}
          <MenuItems
            object={Object.values(act_list.Class3)[i]}
            click={handleClick}
          />
        {/each}
      {:else if showMenu === "GradeIV"}
        {#each Array(Object.keys(act_list.Class4).length) as _, i}
          <MenuItems
            object={Object.values(act_list.Class4)[i]}
            click={handleClick}
          />
        {/each}
      {:else if showMenu === "GradeV"}
        {#each Array(Object.keys(act_list.Class5).length) as _, i}
          <MenuItems
            object={Object.values(act_list.Class5)[i]}
            click={handleClick}
          />
        {/each}
      {:else}
        <svelte:component this={componentName} />
      {/if}
    </div>
  </div>
</div>

<style>
  .header {
    background: #2e3294;
    height: 75px;
    padding: 5px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .header h2 {
    margin: 0;
    margin-left: 24px;
  }

  .content {
    background: rgb(252, 252, 252);
    display: flex;
    height: 100%;
    flex-direction: row;
  }

  .main {
    display: flex;
    width: 90%;
    flex-direction: column;
    padding: 1% 10%;
    flex-wrap: wrap;
  }

  .menu {
    background-color: rgb(221, 221, 221);
    display: flex;
    width: 10%;
  }

  .menu ul {
    width: 100%;
    margin: 0;
  }
  .menu ul li button {
    background: rgb(162, 233, 166);
    width: 100%;
    color: white;
    padding: 10px;
    border-bottom: 1px solid rgb(68, 194, 74);
  }

  .menu ul li h4 {
    text-align: center;
    padding: 10px;
    margin: 0;
    background: #949494;
    color: white;
  }
</style>
