let semek_pokomom ={
    pikachu: {
        species: 'Mouse Pokomom',
        height: 0.8,
        weight: 10,
        power: 0,
    }
}

let power = semek_pokomom?.pikachu?.power || 'No Power'

console.log(power)

// const basket = ['apples',[1,3,5], ['home', 'house', 'car'], 'oranges', 'banana', 'cachew', 'mango'];
//
// const detailedBasket = {
//     'apple' : 20,
//     'house' : 20,
//     'car' : 20,
//     'mango' : 20,
//     'pawpaw' : 20
// }
//
// newBasket = basket.flat(30)
// console.log(newBasket)
//
//
// for (item of basket) {
//     console.log(item);
// }
//
// for (let item of basket) {
//     console.log(item);
// }
//
//
// for (item in basket){
//     console.log(item);
// }

// for (item in detailedBasket) {
//     console.log(item);
// }

// for (item in detailedBasket) {
//     console.log(item.values(detailedBasket));
// }



// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }
//
//
// basket.forEach(element => {
//     console.log(element);
// })

// try {
//     bob + 'hi'
// } catch (e) {
//     console.log( 'you messed up ->> ' + e )
// }
//


// let obj = {
//     username0: 'Semek',
//     username1: 'John',
//     username2: 'Mark',
// }
//
// Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key]);
// })
//
//
// Object.entries(obj).map(value =>{
//     return value[1] + value[0].replace('username', " ");
// })



// let obj = {a:'a', b:'b', c:'c'};
// let clone = Object.assign({}, obj);
// let clone2 ={...obj}
// let clone3 = Object.freeze(obj);
// let clone4 = obj;
//
// obj.c = 5;
//
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(clone3);
// console.log(clone4);


//
//
//
// let obj1 = {name: 'Joshua', password: '1230'};
// let obj2 = obj1;
//
// obj2.password = 'Hello World'
//
//
// console.log(obj1);
// console.log(obj2);


// class Player {
//     constructor (name, type) {
//         console.log('player', this)
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log (`Hi i am ${this.name} i am a ${this.type} Character`);
//     }
// }
//
//
// class Wizard extends Player {
//     constructor(name, type){
//         super(name, type)
//         console.log('wizard', this)
//     }
//     play() {
//         console.log(`Hisssssssss, I am a Powerful ${this.type} Wizard`)
//     }
// }
//
//
// const Wizard1 = new Wizard('Shelly', 'Healer');
// const Wizard2 = new Wizard('Shawn', 'Dark Lord0');
//
//
// Wizard1.play()
// Wizard1.introduce()
//
