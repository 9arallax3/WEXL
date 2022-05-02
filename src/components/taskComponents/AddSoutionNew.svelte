
<style>

    .solution-main{
        margin: auto;
        width: 600px;
        padding: 30px;
        border: 2px solid red;
        border-radius: 20px ;
    }
    
    .solution-grid{
        display: grid;
        justify-content: center;        
        color: black;
    }
    
    .solution-items {
            width: 50px;
            height: 50px;    
            padding: 25% 25%;
            text-align: center;
            border: 1px solid black;
        }
    
    .main-Panal{
        margin-top: 10px;
    }
        
    
    </style>
    
    
    <script>
    
    
        let sizeOfGrid= 5; // take the answer lenght for grid size 
        let mainarray = [[1, 2, 3,4,5], [1, 3, 4], [1, 3, 4,2]];
        let answer = [5,7,1,8,3];
        let carryOver = [];
        carryOver [0] = 0;

            for (let index = 0; index < sizeOfGrid; index++) {
                let n = carryOver[index]; 
                for (let j = 0; j < mainarray.length; j++) { 
                   
                     if(mainarray[j][index] != null){
                         
                        n += mainarray[j][index] ;
                        if(n.toString().split('').length > 1){
                            if(index < sizeOfGrid-1)
                         carryOver[index +1] = parseInt(n.toString().split('')[1]); 
                        }else{
                            if(index < sizeOfGrid-1)
                                carryOver [index +1] = 0;                              
                        }
                     }else{
                        n += 0;
                        if(index < sizeOfGrid-1)
                        carryOver [index +1] = 0; 
                     }
                     
                }
                console.log(n);
            }

        let data = []; // reverse the order beforing string 
        data[0] = [...carryOver];
        data = [...data,...mainarray]
        data.push(answer.reverse())       
        let colors = ['#86C87C','#DB7C4B','#7B85BE','#A567AA','#CEE5D0','#F3C583']

        console.log(data);

    </script>
     
    {#each data as val , k}
    <div class="main-Panal">
        <div class="solution-main">
            <div class="solution-grid" style="grid-template-columns: repeat({sizeOfGrid}, 50px);">
                {#each data as value, i}
                    {#if data.length != i+1}
                            {#each Array(sizeOfGrid) as a ,j}
                            {#if j < value.length}
                            <div class="solution-items" style="background: {(k >= j) ? colors[j] : ''}; grid-row-start: {i+1}; order: {sizeOfGrid - j+1}">{value[j]}</div>
                            {:else}
                            <div class="solution-items" style="background: {(k >= j) ? colors[j] : ''}; grid-row-start: {i+1}; order: {sizeOfGrid - j+1}"></div>
                            {/if}
                        {/each}                        
                        {:else}
                        {#each Array(sizeOfGrid) as a ,j}
                            {#if j < value.length}
                            <div class="solution-items" style="background: {(k >= j) ? colors[j] : ''}; grid-row-start: {i+1}; order: {sizeOfGrid - j+1} ; font-weight: bold;">{value[j]}</div>
                            {:else}
                            <div class="solution-items" style="background: {(k >= j) ? colors[j] : ''}; grid-row-start: {i+1}; order: {sizeOfGrid - j+1}"></div>
                            {/if}
                        {/each} 
                    {/if}
                {/each}
         
            </div>
            <h4>Step {k +1}</h4>
            <h4>Add the thousands column</h4>
            <h4>Add the thousands column</h4>
            <h4>Add the thousands column</h4>
        </div>
    </div>
    {/each}


   
   