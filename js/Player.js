class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    //('/'): used to refer to the entire database
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    //static func are not linked to any object but the entire class
    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
}