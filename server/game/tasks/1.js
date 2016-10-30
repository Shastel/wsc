const TASK_NAME = '1';
const signs = ['+', '-', '*', '/'];

function solve({ values, sign }, answer) {
    const summ = values.reduce((p,c) => {
        eval(`${p}${sign}${c}`);
    });

    return summ === answer;
}

function start(){
    const sign = signs[Math.floor(Math.random() * signs.length)];
    const arr = Array.from({length: 4}, ()=>Math.floor(Math.random()));

    return {
        task_name: TASK_NAME,
        task: {
            sign,
            values: arr,
        }
    };
}

export default {
    name: TASK_NAME,
    solve,
    start,
};
