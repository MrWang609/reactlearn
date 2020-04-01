import React, { Component } from 'react'

const withCopyRight = (YourComponent) => {
    return class withCopyRight extends Component {
        render() {
            return (
                <>
                    <YourComponent {...this.props} />
                    这是高阶组件的方法
                </>
            )
        }
    }
}

export default withCopyRight
