

// var grid = [];
// for (i=10; i>0; i--){
//   for (j=10; j>0; j--){

//   grid.push([i,j])
// }
// }
// console.log(grid[99])


var myRover = {
  position: [0,0], 
  direction: 'N'
};

var orientation = ['N','E','S','W']

function goForward(rover, move) {
  switch(move) {
    case 'f':
    //ifs for forward
          if (myRover.direction==="N"){
          rover.position[0]++;
        }else if(myRover.direction==="E"){
          rover.position[1]++
        }else if(myRover.direction==="W"){
          rover.position[0]--
        }else if(myRover.direction==="S"){
          rover.position[1]--
        }

         //makes sure rover doesnt go beyond grid
        wrapRoverPosition();



      break;
    case 'r':
     //ifs for direction change
        if (myRover.direction==="N"){
          rover.direction = 'E';
        }else if(myRover.direction==="E"){
           rover.direction = 'S';
        }else if(myRover.direction==="W"){
           rover.direction = 'N';
        }else if(myRover.direction==="S"){
           rover.direction = 'W';
        }

      break;
    case 'b':
     //ifs for backward
       if (myRover.direction==="N"){
          rover.position[0]--;
        }else if(myRover.direction==="E"){
          rover.position[1]--;
        }else if(myRover.direction==="W"){
          rover.position[0]++;
        }else if(myRover.direction==="S"){
          rover.position[1]++;
        }

        //make sure rover doesnt leave grid

        wrapRoverPosition();

      break;
    case 'l':
    //ifs for direction change
     if (myRover.direction==="N"){
          rover.direction = 'W';
        }else if(myRover.direction==="E"){
           rover.direction = 'N';
        }else if(myRover.direction==="W"){
           rover.direction = 'S';
        }else if(myRover.direction==="S"){
           rover.direction = 'E';
        }
      break;


  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function wrapRoverPosition() {
        if (myRover.position[0]>9){
            myRover.position[0] -= 10;
        } else if(myRover.position[0] <0 ){
            myRover.position[0] += 10;
        }

        if (myRover.position[1]>9){
            myRover.position[1] -= 10;
        }else if(myRover.position[0] <0 ){
            myRover.position[0] += 10;
        }

      }


function moveRover(command_sent) {

// var command = prompt('What is your request for this command rover?');

var command = command_sent;
goForward(myRover, command);
}



