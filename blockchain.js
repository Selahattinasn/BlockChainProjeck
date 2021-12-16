const Block=require("./block");
class Blockchain{

    constructor(){
        this.chain =[Block.genesis()];
    }

    addBlock(data){ // Block erzeugen und an chain anhängen
        const block = Block.mineBlock(this.chain[this.chain.length-1]); 
        this.chain.push(block); // block an kette anhängen
        return block; // monitoring
    }
 

}


module.exports=Blockchain;