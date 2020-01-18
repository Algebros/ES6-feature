import "@babel/polyfill";
import * as ArticlesModel from './articles';

async function req() {
    let articles = await ArticlesModel.all();
    let ind = Math.floor(Math.random() * articles.length);
    console.log(articles, ind);

    let article = await ArticlesModel.one(articles[ind].id);
    console.log(article);

    let rem = await ArticlesModel.remove(article.id)
    console.log(rem);

    let statusArt = await ArticlesModel.all();
    console.log(statusArt)
}

req().catch((err) => {
    console.log(err);
});

// ArticlesModel.all((articles) => {
//     console.log('articles count = ' + articles.length);
    
//     // берём случайный индекс
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)

//     // получаем статью по id
//     ArticlesModel.one(articles[ind].id, (article) => {
//         console.log(article);

//         // пробуем удалить её
//         ArticlesModel.remove(article.id, (res) => {
//             console.log('что с удалением? - ' + res);

//             // а сколько статей в базе сейчас
//             ArticlesModel.all((articles) => {
//                 console.log('articles count = ' + articles.length);
//             }, (error) => {
//                 console.log(error + ' in articles list after delete');
//             });
//         }, (error) => {
//             console.log(error + ' in articles delete');
//         })

//     }, (error) => {
//         console.log(error + ' in articles one');
//     });

// }, (error) => {
//     console.log(error + ' in articles list');
// });