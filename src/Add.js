import React, { Component, Fragment } from 'react'
import store from './store'
import { Input, Button  } from 'antd'
import 'antd/dist/antd.css'
class Await extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.handelChange = this.handelChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <Input placeholder={this.state.inputValue} value={this.state.inputValue} onChange={this.handelChange}  style={{width:'250px'}} />
                <Button type="primary" onClick={this.handleAdd}>添加</Button>
            </Fragment>
            
        );
    }
    storeChange(){
        this.setState(store.getState())
    }
    handleAdd(index) {
        const action = {
            type:'add',
            index
        }
        store.dispatch(action)
    }
    handelChange(e) {
        const action = {
            type:'change',
            value:e.target.value,
        }
        store.dispatch(action);
    }
}

export default Await