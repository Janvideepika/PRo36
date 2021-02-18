var dog,dogimg,happydogimg,database,foods,foodstock
var database,foodStock,lastfeed,addFood,feedtime,feed;
function preload()
{
  //load images here
  happydogimg = loadImage("dogImg.png")
  dogimg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database()
  dog = createSprite(300,300)
  dog.addImage("dog",dogimg)
  dog.scale = 0.5
  foodstock = database.ref('Food')
  foodstock.on("value",readStock);
  feed =createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function readStock(data){
  foods = data.val();
  foodObj
}

function feedDog(){
  dog.addImage(happyDog);

  foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodobj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFood(){
  FoodS++;
  database.ref('/').update({
    Food:foods,
  })
}

//Function to write values in DB
function writeStock(x){
  if(x <= 0){
    x = 0
  }
  else{
    x = x - 1 
  }
  database.ref('/').update(
    {
      Food:x
    }
  )
}

function draw() {  
  background(46,139,87);
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
fill(255,255,254);
textSize(15);
if(lastFed>=12){
text("Last Feed:"+ lastFed%12 +"PM",350,30);
}else if (lastFed==0){
  text("Last Feed: 12AM", 350,30);
}else{
text("Lat Feed:"+lastFeed +"AM",350,35);
}
}








