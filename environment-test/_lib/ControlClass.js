class ControlClass {
    constructor(){
        //Key Object
        this.keyMap = {};
        this.debugFlag = false;
        
        //Pass in action objects to check
        this.actionCheckArray = [];

        //bind keydown + up and push to keyMap
        onkeydown = onkeyup = (e) => {
            e = e || event; // to deal with IE
            this.keyMap[e.keyCode] = e.type == 'keydown';
            
            console.log(this.actionCheckArray[0].keyArray);
            console.log(this.keyMap)

            //Loop through the action array
            this.actionCheckArray.forEach((actionObj) => {
                if(actionObj.keyArray === this.keyMap){
                    actionObj.action();
                }
            });

            //Debug method to see what's being spit out
            if(this.debugFlag){
                this.logInputArray();
            }
        }
    }
    addActionCheck(actionObj){
        if(!actionObj){
            console.error("No Action Object passed in!");
            return false;
        }else{
            this.actionCheckArray.push(actionObj);
        }
    }
    //When the debug flag is set to true, logs input array out
    logInputArray(){
        console.info(this.keyMap);
    }    
}
export default (new ControlClass);