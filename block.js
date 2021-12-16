class Block{
    // Konstruktor+Parameter

    construktor(timestamp, lastHash, hash, data){
        this.timestamp=timestamp; // Zeitstempel
        this.lastHash=lastHash; // Hash des vorgehenden Blocks
        this.hash=hash; //eigener hash
        this.data=data; // Daten
    }

    toString(){ // für Debugging ...

        return ` Block -
    
            Timestamp:  ${this.timestamp}
            Last Hash:  ${this.lastHash}
            Hash:       ${this.hash}
            Data:       ${this.data}
    
        `;
    
    }


}

module.exports=Block;