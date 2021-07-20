import React, { Component, Fragment } from 'react'
import store from './store'
import { List, Checkbox } from 'antd'
import 'antd/dist/antd.css'
class Await extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <div>待办理</div>
                <List bordered itemLayout="horizontal"  dataSource={this.state.list} renderItem={(item, index)=>(
                    <List.Item 
                        actions={[<div onClick={this.handleDelete.bind(this, index)} key="list-loadmore-edit">删除</div>]}>
                            <Checkbox onChange={this.onChange.bind(this, index)}>{item}</Checkbox>
                        </List.Item>
                )}></List>
            </Fragment>
            
        );
    }
    storeChange(){
        this.setState(store.getState())
    }
    onChange(index) {
        const action = {
            type:'complete',
            index
        }
        store.dispatch(action)
    }
    handleDelete(index) {
        const action = {
            type:'deleteAwait',
            index
        }
        store.dispatch(action)
    }
}

export default Await