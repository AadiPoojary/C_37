class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
        this.greeting1 = createElement('h3');

    }
    hide(){
        this.greeting.hide();
        this.greeting1.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing");
        title.position(140,0);

        
        this.input.position(130,160);
        this.button.position(250,200);

       
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name+ "!!!");
            this.greeting.position(130,160);
       
            this.greeting1.html("Welcome to Car Racing");
            this.greeting1.position(130,200)
        })
    }
}

//headings : createElement
//to take input: createInput
//for button : createButton 