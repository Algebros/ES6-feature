import * as serverApi from './db';

async function all(){
    let response = await serverApi.all();
    return parseResp(response);
}

// function all(onSuccess, onError){
//     serverApi.all((response) => {
//         let info = JSON.parse(response);

//         if(info.code === 200){
//             onSuccess(info.data);
//         }
//         else{
//             onError(info.status);
//         }
//     });
// }

async function one(id){
    let response = await serverApi.get(id);
    return parseResp(response);
}

// function one(id, onSuccess, onError){
//     serverApi.get(id, (response) => {
//         let info = JSON.parse(response);

//         if(info.code === 200){
//             onSuccess(info.data);
//         }
//         else{
//             onError(info.status);
//         }
//     });
// }

async function remove(id){
    let response = await serverApi.remove(id);
    return parseResp(response);
}

// function remove(id, onSuccess, onError){
//     serverApi.remove(id, (response) => {
//         let info = JSON.parse(response);

//         if(info.code === 200){
//             onSuccess(info.data);
//         }
//         else{
//             onError(info.status);
//         }
//     });
// }

function parseResp(str) {
    let info = JSON.parse(str);
    return info.data;
}

export {all, one, remove};