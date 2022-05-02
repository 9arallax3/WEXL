<script>
  export let act_choice='';
</script>

<!-- Markup Area-->
<!-- SCC Base Setup-->
<div class="sccapp stack-large">
    <!-- Response Area -->
    <h2 id="list-heading">Area for System Response</h2>
    <p>the user has selected: {act_choice}</p>
    <!-- MoreActions -->
    <div class="btn-group">
      <button type="button" class="btn btn__primary">Next</button>
      <button type="button" class="btn btn__primary">Exit</button>
    </div>
    <canvas id="clock" width="150" height="150">
      <img src="images/clock.png" width="150" height="150" alt=""/>
    </canvas>

  </div>