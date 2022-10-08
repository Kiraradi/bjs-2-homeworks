class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        } 

        if (this.alarmCollection.find(alarmItem => alarmItem.id === id)) {
            console.error();
            return;
        }

        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback
        });
    }

    removeClock(id) {
        let alarmItemId = this.alarmCollection.findIndex(alarmItem => alarmItem.id === id);
        if (alarmItemId >= 0) {
            this.alarmCollection.splice(alarmItemId, 1);
            return true;
        }

        return false;
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

        return `${hours}:${minutes}`;
    }

    start() {
        let checkClock = (alarmItem) => {
            if (alarmItem.time === this.getCurrentFormattedTime()) {
                alarmItem.callback();
            }
        }
        
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarmItem => checkClock(alarmItem));
            }, 1000);
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarmItem) => console.log(alarmItem.id, alarmItem.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

//
function testCase() {
    let clock = new AlarmClock();
    clock.addClock(clock.getCurrentFormattedTime(),() => console.log(`Мы в системе`), 1);

    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    
    const alarmId = 2;
    clock.addClock(getFormattedTime(date), () => {
        console.log(`Мы в системе, опять`);
        clock.removeClock(alarmId);
    }, alarmId);

    date.setMinutes(date.getMinutes() + 1);
    clock.addClock(getFormattedTime(date), () => {
        console.log(`Мы в системе, опять2`);
        clock.clearAlarms();
    }, 3);
    
    clock.printAlarms();
    clock.start();
}

function getFormattedTime(date) {
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

    return `${hours}:${minutes}`;
}

testCase();