import { Parody, prDOM } from '../parody';

export default class InputNumber extends Parody {
  constructor(props) {
    super(props);

    this.onChange = ('change' in props) ? props.change : function () {};
  }

  _normalizeValue(val) {
    let newVal = parseInt(val);

    if (isNaN(newVal) || newVal < this.props.min) {
      newVal = this.props.min;
    } else if (newVal > this.props.max) {
      newVal = this.props.max;
    }

    this.onChange(newVal);
  }

  render() {
    return super.render(
      <div className="inputNumber">
        <input type="button" value="-" className="inputNumber__min" 
        onclick={() => this._normalizeValue(this.props.value - 1)} />
        <input type="text" value={this.props.value} className="inputNumber__value"
        onchange={(e) => this._normalizeValue(e.target.value)} />
        <input type="button" value="+" className="inputNumber__max" 
        onclick={() => this._normalizeValue(this.props.value + 1)} />
      </div>
    );
    // const min = createNode('input', {
    //   type: 'button',
    //   value: '-',
    //   onclick: () => {
    //     this._normalizeValue(this.props.value - 1);
    //   },
    //   className: 'inputNumber__min',
    // });

    // const plus = document.createElement('input');
    // plus.setAttribute('type', 'button');
    // plus.value = '+';
    // plus.addEventListener('click', (e) => {
    //   this._normalizeValue(this.props.value + 1);
    // });

    // const num = document.createElement('input');
    // num.className = 'inputNumber__value';
    // num.setAttribute('type', 'text');
    // num.value = this.props.value;
    // num.addEventListener('change', (e) => {
    //   this._normalizeValue(e.target.value);
    // });

    // const root = document.createElement('div');
    // root.append(min);
    // root.append(num);
    // root.append(plus);
  }
}
