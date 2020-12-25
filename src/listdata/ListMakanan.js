import React, { Component } from 'react'

export default class listmakanan extends Component {
    constructor(props) {
    super(props);
    this.state = {
        dataList: this.props.gambar
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.dataList} alt="Produk Makanan" width="150"/>
            </div>
        )
    }
}
