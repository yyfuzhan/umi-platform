import React, { Component } from 'react';
import Clock from '../clock';
import styles from './access.less';

class myRef extends Component {
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
    this.inpuElement = null;
    this.childRef = React.createRef();
  }
  handleFocus = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        {/* 方法一 */}
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleFocus}>获取焦点</button>
        {/* 方法二 */}
        <hr />
        <input type="text" ref={(e) => (this.inpuElement = e)} />
        <button onClick={() => this.inpuElement && this.inpuElement.focus()}>
          获取第二个文本框的焦点
        </button>
        {/* 获取子组件实例 */}
        <Clock ref={this.childRef}></Clock>
        <button onClick={() => console.log(this.childRef)}>
          获取子组件实例
        </button>
      </div>
    );
  }
}
export default myRef;
