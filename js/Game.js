class Game{
    constructor(){}

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            
            //.once it is a asynchronous listner
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
           
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game has Begun",100,100);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            var y = 130;
            y+=20;

            //to display the active player in red
            //for every plr in the allPlayers array this loop will work
            for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
            }
            
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,y);
        }
        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance+=50;
            player.update();
        }
        
    }
}