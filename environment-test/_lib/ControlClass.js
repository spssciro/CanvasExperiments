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
            
            //Debug method to see what's being spit out
            if(this.debugFlag){
                this.logInputArray();
            }
        }
    }
    checkAction(){
        //Loop through the action array
        this.actionCheckArray.forEach((actionObj) => {
            if (this.keyMap[actionObj.keyArray]){
                actionObj.action();
                
            }
        });        
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