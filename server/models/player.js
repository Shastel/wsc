import { createHmac } from 'crypto';

const secret = Date.now().toString();

export default class Player{
    constructor(name) {
        this.name = name;
        this.token = createHmac('sha256', this.name + secret);

        this.taskSolved = 0;
    }
}
