import React, { Component, Fragment } from 'react'
import store from './store'
import { List, Checkbox } from 'antd'
import 'antd/dist/antd.css'
class Complete extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <div>已完成</div>
                <List bordered itemLayout="horizontal"  dataSource={this.state.completeList} renderItem={(item, index)=>(
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
            type:'await',
            index
        }
        store.dispatch(action)
    }
    handleDelete(index) {
        const action = {
            type:'deleteComplete',
            index
        }
        store.dispatch(action)
    }
}

export default Complete