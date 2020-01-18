/**
 * Глобальная вероятность успеха для удобства тестирования
 */
const GLOBAL_PROPABILITY = 0.9;
const BAD_JSON_PROPABILITY = 0.1;

/**
 * Получить все записи из хранилища
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export function all(){
    return TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => serverAnswer(articlesStorage));
}

// export function all(onAnswer){
//     TimeoutPropabiliry(300, GLOBAL_PROPABILITY, () => {
//         onAnswer(serverAnswer(articlesStorage));
//     }, () => {
//         onAnswer(serverAnswer('', 100500, "Propability Error"));
//     });
// }

/**
 * Получить статью по id
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export function get(id){
    return TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => serverAnswer(articlesStorage[mapArticles[id]]));
}

// export function get(id, onAnswer){
//     TimeoutPropabiliry(300, GLOBAL_PROPABILITY, () => {
//         onAnswer(serverAnswer(articlesStorage[mapArticles[id]]));
//     }, () => {
//         onAnswer(serverAnswer('', 100500, "Propability Error"));
//     });
// }

/**
 * Удалить статью из базы
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON  
 */
export function remove(id){
    return TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => {
        if(id in mapArticles){
            let num = mapArticles[id];
            delete mapArticles[id];
            articlesStorage.splice(num, 1);
            return serverAnswer(true);
        }
        else{
            return serverAnswer(false);
        }
    });
}

// export function remove(id, onAnswer){
//     TimeoutPropabiliry(300, GLOBAL_PROPABILITY, () => {
//         if(id in mapArticles){
//             let num = mapArticles[id];
//             delete mapArticles[id];
//             articlesStorage.splice(num, 1);
//             onAnswer(serverAnswer(true));
//         }
//         else{
//             onAnswer(false);
//         }
//     }, () => {
//         onAnswer(serverAnswer('', 100500, "Propability Error"));
//     });
// }

/* полуприватная часть*/
function TimeoutPropabiliry(time, probability){
    return new Promise((res, rej) => {
        window.setTimeout(() => {
            Math.random() < probability ? res() : rej({message: 'Propability Error'});
        }, time);
    });

}

// function TimeoutPropabiliry(time, probability, onSuccess, onError){
//     window.setTimeout(() => {
//         Math.random() < probability ? onSuccess() : onError();
//     }, time);
// }

function serverAnswer(data, code = 200, status = "OK"){
    if(Math.random() < BAD_JSON_PROPABILITY){
        throw new Error('incoorect json')
    }

    return JSON.stringify({
        code, 
        status,
        data
    });
}

/*  приватная часть */ 
let articlesStorage = [
    {
        id: 1,
        title: 'Профисификация кода',
        dt: '2020-01-06',
        text: 'Код без промисов бывает жестью, но и с ними можно изобразить много странного.'
    },
    {
        id: 2,
        title: 'Итераторы и генераторы',
        dt: '2020-01-01',
        text: 'Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом.'
    },
    {
        id: 5,
        title: 'Javascript',
        dt: '2020-01-02',
        text: 'Всё равно хороший язык программирования.'
    }
];

let mapArticles = {};

articlesStorage.forEach((item, i) => {
    mapArticles[item.id] = i;
});

