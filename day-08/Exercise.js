// 1_-
console.log(1);
class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }

  addWorkingHours(hours) {
    this.workingHours = hours;
  }

  calculateSalary() {
    return 0;
  }
}

class FulltimeEmployee extends Employee {
  calculateSalary() {
    if (this.workingHours > 6) {
      return this.workingHours * 75000;
    } else {
      return this.workingHours * 100000;
    }
  }
}

class ParttimeEmployee extends Employee {
  calculateSalary() {
    if (this.workingHours > 6) {
      return this.workingHours * 30000;
    } else {
      return this.workingHours * 50000;
    }
  }
}

let emp1 = new FulltimeEmployee("Andi");
emp1.addWorkingHours(5); // kerja 5 jam
console.log(emp1.name + " salary: IDR " + emp1.calculateSalary());

let emp2 = new ParttimeEmployee("Budi");
emp2.addWorkingHours(8); 
console.log(emp2.name + " salary: IDR " + emp2.calculateSalary());

// 2
console.log(2);

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100; 
    this.power = 10; 
  }

  damage(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    let health = Math.random() > 0.5 ? 10 : 0;
    let power = health === 0 ? 10 : 0;
    return { health: health, power: power };
  }

  start() {
    console.log("_Game Start_");

    while (this.player1.health > 0 && this.player2.health > 0) {

      this.player1.showStatus();
      this.player2.showStatus();

      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());

      this.player2.damage(this.player1.power);

      if (this.player2.health <= 0) {
        console.log(`${this.player1.name} wins!`);
        break;
      }

      this.player1.damage(this.player2.power);

      if (this.player1.health <= 0) {
        console.log(`${this.player2.name} wins!`);
        break;
      }

      console.log(" _Next Round_");
    }
  }
}

let p1 = new Player("Player A");
let p2 = new Player("Player B");

let game = new ShootingGame(p1, p2);
game.start();

