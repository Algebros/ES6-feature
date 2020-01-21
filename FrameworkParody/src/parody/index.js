export class Parody {
  constructor(props) {
    if(typeof props !== 'object') {
      props = {}
    }

    this.props = props;
    this.isMount = false;
    this.targetNode;
  }

  bindMount(selector) {
    this.isMount = true;
    this.targetNode = document.querySelector(selector);
    return this;
  }

  render(node) {
    if(this.isMount) {
      this.targetNode.innerHTML = '';
      this.targetNode.append(node)
    }
    return node;
  }
}

export function createNode(tagName, props) {
  let node = document.createElement(tagName);

  for (let name in props) {
    node[name] = props[name]
  }

  return node;
}