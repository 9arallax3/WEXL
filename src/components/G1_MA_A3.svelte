<script>
    import NPad from './Input_digits_20btn.svelte';
    import * as clrs from './jsfiles/colors_repo.js'
    import * as images from './jsfiles/Image_repo.js';
    import * as c_ans from './jsfiles/correct_ans_repo.js';
    import * as w_ans from './jsfiles/wrong_ans_repo.js';

    const shapes_repo = [
        {id: 0, shape: "Square"},
        {id: 1, shape: "Rectangle"},
        {id: 2, shape: "Circle"},
        {id: 3, shape: "Ellipse"},
        {id: 4, shape: "Polygon"}
    ];
    const max_shapes_repo = 5;
    const radius =10;
    const side = 2*radius;
    const r = 20;
    const d = 40;
    const gap =10;


    let ans_submit=false;
    let rerun=false;
    let usr_exit=false;

    const COUNT_LOWNUM = 0;
    const COUNT_HIGHNUM = 20;

    let cnt_rn = 0;
    let fill_clr = clrs.html_colors[0].color_name;
    let brdr_clr = clrs.html_colors[5].color_name;
    const brdr_width = 2;
    let shape_rn = 0;
    let img_rn = images.IMAGES_REPO_LOWNUM;;
    let c_ans_rn = c_ans.CORRECT_ANS_MSG_LOWNUM;
    let w_ans_rn = w_ans.WRONG_ANS_MSG_LOWNUM;
    let correct_answer = -1;
    let usr_resp = -1;
    let fn = '';

    function init_shapes() {
        cnt_rn = Math.floor(Math.random() * COUNT_HIGHNUM + COUNT_LOWNUM);
        shape_rn = Math.floor(Math.random() * max_shapes_repo);
        fill_clr = clrs.html_colors[
            Math.floor(Math.random() * clrs.html_max_colors)
        ].color_name;
        brdr_clr = clrs.html_colors[
            Math.floor(Math.random() * clrs.html_max_colors)
        ].color_name;
        
        img_rn = Math.floor(Math.random() * images.IMAGES_REPO_HIGHNUM + images.IMAGES_REPO_LOWNUM);
        c_ans_rn = Math.floor(Math.random() * c_ans.CORRECT_ANS_MSG_HIGHNUM + c_ans.CORRECT_ANS_MSG_LOWNUM);
        w_ans_rn = Math.floor(Math.random() * w_ans.WRONG_ANS_MSG_HIGHNUM + w_ans.WRONG_ANS_MSG_LOWNUM);
        correct_answer = cnt_rn;
        fn = 'images/' + (images.IMAGES_REPO[img_rn]['img_name']);
        usr_resp = -1;
        ans_submit = false;
    };
    init_shapes();

    function submitted () {
        ans_submit = true;
    };

    function skill_exit () {

    };

    function calc_cx(i) {
        let diameter = 2*radius;
        return (diameter+gap)*(1+i)
    };

    function calc_polygon_points(i) { 
        console.log(i);
        let base_width =0;
        base_width = i*20;
        return (
            num.toString(base_width) + ",0 " + 
            num.toString(2*base_width) +"," + base_width +
            " 0," + num.toString(base_width)
        )
    };
</script>

<!-- Markup Area-->

<div class="stack-large">
    <div>
        <p style="color:gray">Practice counting shapes upto 20: </p>
        <h2>Count the total number of shapes: </h2>
        <!--for loop over the answer which is a random number-->
        <svg width=100% height=10%>
            <!-- Square -->
            {#if (shape_rn == 0)}
                {#each Array(cnt_rn) as _, i}
                    <rect x={calc_cx(i)} y={side+gap} 
                        width={side} height={side} 
                        stroke={brdr_clr} stroke-width={brdr_width} 
                        fill={fill_clr} />
                {/each}

            <!-- Rectangle -->
            {:else if (shape_rn == 1)}
                {#each Array(cnt_rn) as _, i}
                    <rect x={calc_cx(i)} y={radius+gap} 
                        width={side} height={side+(2*gap)} 
                        stroke={brdr_clr} stroke-width={brdr_width} 
                        fill={fill_clr} />
                {/each}

            <!-- Cirlce -->
            {:else if (shape_rn == 2)}
                {#each Array(cnt_rn) as _, i}
                    <circle cx={calc_cx(i)} cy={radius+gap} r={radius} 
                        stroke={brdr_clr} stroke-width={brdr_width} 
                        fill={fill_clr} />
                {/each}

            <!-- Elipse -->
            {:else if (shape_rn == 3)}
                {#each Array(cnt_rn) as _, i}
                    <ellipse cx={calc_cx(i)+gap} cy={radius} rx={side} ry={radius}
                        stroke={brdr_clr} stroke-width={brdr_width} 
                        fill={fill_clr} />
                {/each}

            <!-- Polygon / Triangle -->
            {:else }
                {#each Array(cnt_rn) as _, i}
                <polygon 
                    points="{r+ i*d},0 {r+ i*d},{r} {r+ i*d},{r}"
                    stroke={brdr_clr} stroke-width={brdr_width} 
                    fill={fill_clr} />
                {/each}
            {/if}
            Sorry, your browser does not support inline SVG.
        </svg> 
    </div>
  

    <div>
        <br>
        <p>Enter your answer here: </p>
        <NPad bind:usr_select={usr_resp}/>
        {#if ans_submit}
        
        {#if (usr_resp === correct_answer)}
            <p>{c_ans.CORRECT_ANS_MSG[c_ans_rn].msg}</p>
        {:else}
            <p>{w_ans.WRONG_ANS_MSG[w_ans_rn].msg}</p>
        {/if}
        {/if}
    </div>
    <button type="button" class="btn toggle-btn" on:click={ () => submitted()}> Submit</button>
    <button type="button" class="btn toggle-btn" on:click={ () => init_shapes()}> Rerun</button>
    <button type="button" class="btn toggle-btn" on:click={ () => skill_exit()}> Exit This Skill</button>
</div>