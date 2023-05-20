const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this._field = field;
    }
    get field(){
        return this._field;
    }
    print(){
            for(let i = 0; i < this._field.length; i++){
            console.log(this._field[i].join(''));
         }
    }
    play(){
        let x_axis = 0;
        let y_axis = 0;
        let myField = this._field;
        //console.log(myField);
        let width = myField[0].length;
        let height = myField.length; 

        this.print();
        for(let i = 0; i<= height*width; i++){
        const move = prompt('Enter your move: ');
        switch(move){
        case 'l':
            y_axis--;
            if(myField[x_axis][y_axis]=== hat)
                return console.log(`You win!`);
            else if(myField[x_axis][y_axis]=== hole)
                return console.log(`You lost!`);
            else{
                if(y_axis < 0)
                    return console.log(`Out of Bounds.You lost!`);
                else
                    {myField[x_axis][y_axis] = pathCharacter;
                    this.print();}
             }
            break;
        case 'r':
            y_axis++;
            if(myField[x_axis][y_axis]=== hat)
                return console.log(`You win!`);
            else if(myField[x_axis][y_axis]=== hole)
                return console.log(`You lost!`);
            else{
                if(y_axis > (width - 1))
                    return console.log(`Out of Bounds.You lost!`);
                else
                    {myField[x_axis][y_axis] = pathCharacter;
                    this.print();}
            }
            break;
        case 'd':
            x_axis++;
            if(myField[x_axis][y_axis]=== hat)
                return console.log(`You win!`);
            else if(myField[x_axis][y_axis]=== hole)
                return console.log(`You lost!`);
            else{ 
                if(x_axis > (height - 1))
                    return console.log(`Out of Bounds.You lost!`);
                else
                    {myField[x_axis][y_axis] = pathCharacter;
                    this.print();}
             }
            break;
        case 'u':
            x_axis--;
            if(myField[x_axis][y_axis]=== hat)
                return console.log(`You win!`);
            else if(myField[x_axis][y_axis]=== hole)
                return console.log(`You lost!`);
            else{    
                if(x_axis < 0)
                    return console.log(`Out of Bounds.You lost!`);
                else
                    {myField[x_axis][y_axis] = pathCharacter;
                    this.print();}
            }
            break; 
        default:
            console.log(`Invalid Move`);
            break;      
        }
    }

}
    static genrateField(height, width){
        let field = [fieldCharacter,hole]
        let newArr = [];
        
        //newArr.length = width;
        for(let i = 0; i < width; i++){ 
            let intarr = []; 
            for(let j = 0; j < height; j++){          
            const random = Math.floor(Math.random() * 10);
            if(random < 7)
                intarr.push(fieldCharacter);
            else
                intarr.push(hole);
            //intarr.push(field[random]);
            }
            newArr.push(intarr);
        }
       //console.log(newArr);
      // const random = Math.floor(Math.random() * newArr);
       const xRandom = Math.floor(Math.random() * newArr.length);
       const yRandom = Math.floor(Math.random() * newArr.length);
       newArr[xRandom][yRandom] = hat;
       newArr[0][0] = pathCharacter;
       return newArr;
    }
    
}
/*const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);*/
//
const myField = new Field(Field.genrateField(9,5)); 
myField.play();