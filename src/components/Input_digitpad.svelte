<script>
  import digits from "./jsfiles/Digit_text_img_repo.js";
  export let usr_select = "";
  export let max_button;

  console.log("inside Input DigitPad");
</script>

<div class="digipad">
  <div class="grid-wide">
    {#each Array(max_button) as _, i}
      <div class="square">
        <button
          on:click={() => (usr_select = i)}
          style="background-color: {digits[i].color};">{i}</button
        >
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  button {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 4vmin;
    border: none;
    margin: 0;
    will-change: transform;
  }

  .photo,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .photo {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: column;
    will-change: transform;
  }

  img {
    object-fit: cover;
    cursor: pointer;
  }

  .credit {
    text-align: right;
    font-size: 2.5vmin;
    padding: 1em;
    margin: 0;
    color: white;
    font-weight: bold;
    opacity: 0.6;
    background: rgba(0, 0, 0, 0.4);
  }

  .credit a,
  .credit a:visited {
    color: white;
  }
</style>
