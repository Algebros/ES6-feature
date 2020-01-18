function watchObj(node, callback){

  return new Proxy(node, {
    get(target, name) {
      if(typeof target[name] === 'object') return watchObj(target[name], callback);
      if(typeof target[name] === 'function') return watchObj(target[name].bind(target), callback);
      return target[name];
    },

    set(target, name, value) {
      target[name] = value;
      callback(name, value);
      return true;
    }
  });
}

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';

// в консоли: 
// innerHTML <strong>HTML</strong><em>Changed</em

cleverDiv.style.color = 'red';

// весь текст стал красным
// в консоли: 
// color red

cleverDiv.querySelector('em').style.color = 'green';

// em стал зелёным
// в консоли ничего не добавилось

cleverDiv.classList.add('some')

// добавился класс some
// в консоли ничего не добавилось
