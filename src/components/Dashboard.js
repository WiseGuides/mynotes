import '../../assets/lib/react-ui-tree.less';
import '../../assets/lib/theme.less';
import '../../assets/lib/app.less';
import cx from 'classnames';
import React, { Component } from 'react';
import Tree from 'react-ui-tree';
import tree from './tree';
import tags from './tags';
// import packageJSON from '../package.json';
console.log(tree);

class Dashboard extends Component {
  state = {
    active: null,
    tree: tree,
    tags: tags
  }; 

  renderNode = node => {
    return (
      <span
        className={cx('node', {
          'is-active': node === this.state.active
        })}
        onClick={() => this.onClickNode(null, node)}
      >
        {node.module}
      </span>
    );
  };

  onClickNode = (x, node) => {
    if (node.children) {
      // do nothing
    } else {
      console.log(node);
      this.setState({activeContent: node.module})
      document.getElementById('main-content').innerHTML = node.module;
    }
    this.setState({
      active: node
    });
  };

  render() {
    return (
      <div className="app">
        <div className="tree" id="tree">
          <Tree
            paddingLeft={20}
            tree={this.state.tree}
            onChange={() => this.handleChange({tree: tree})}
            renderNode={this.renderNode}
          />
          <Tree
          paddingLeft={20}
          tree={this.state.tags}
          onChange={() => this.handleChange({tags:tags})}
          renderNode={this.renderNode}
        />
        </div>
        <div id="main-content"></div>
      </div>
    );
  }

  handleChange = obj => {
    this.setState(obj, () => console.log(this.state));
  }

  persistState() {
    console.log('persisting state to DB');
  }

  updateTree = () => {
    const { tree } = this.state;
    tree.children.push({ module: 'test' });
    this.setState({
      tree: tree
    });
  };
}

export default Dashboard;