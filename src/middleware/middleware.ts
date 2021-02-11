const exec = require('child_process').exec;

export let processVideo = () =>{
    /**
     * TODO: Logic to process video with c++ algorithm
     */
    exec('echo heuy', (err:any, stdout:any, stderr:any) => {
        if(err){
            console.log("There was a problem")
        }
        console.log(stdout)
      })

}