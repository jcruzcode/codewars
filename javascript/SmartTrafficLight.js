// 6 kyu - Smart Traffic Lights
class SmartTrafficLight {
    constructor(st1, st2) {
        this.cars1 = st1[0];
        this.cars2 = st2[0];
        this.name1 = st1[1];
        this.name2 = st2[1];
    }

    turngreen() {
        if (this.cars1 === this.cars2 || 
           (this.cars1 === 0 && this.cars2 === 0) ) {
            return null;
        } else if (this.cars1 > this.cars2) {
            this.cars1 = 0;
            return this.name1;
        } else {
            this.cars2 = 0;
            return this.name2;
        }
    }
}