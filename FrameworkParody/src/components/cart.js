import { Parody } from '../parody';
import InputNumber from './input-number';

export default class Cart extends Parody{
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { price: 1000, rest: 10, current: 1 },
        { price: 2000, rest: 5, current: 2 },
        { price: 3000, rest: 3, current: 3 }
      ]
    }
  }

  onChange(ind, val) {
    this.state.products[ind].current = val;
    console.log(this.state)
  }

  render() {
    let div = document.createElement('div');
    
    this.state.products.forEach((elem, i) => {
      let input = (new InputNumber({
        min: 1,
        max: elem.rest,
        value: elem.current,
        change: this.onChange.bind(this, i),
      })).render();

      div.append(input);
    })

    let summary = document.createElement('div');
    summary.innerHTML = this.state.products.reduce((total, item) => total + item.price * item.current, 0);
    div.append(summary);

    return div;
  }
}