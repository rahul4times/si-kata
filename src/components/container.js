import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAngler } from '../actions/angler';

import BlueFish from './blue_fish';
import ChannelFish from './channel_fish';
import FlatHead from './flat_head';

class Container extends Component {

  componentDidMount(){
    this.props.getAngler();
  }

  render(){
    const blueFish = this.props.blue;
    const flatHead = this.props.flathead;
    const channel = this.props.channel;
    return(
      <div>
        <BlueFish blueFish={blueFish} />
        <ChannelFish channel={channel} />
        <FlatHead flatHead={flatHead} />
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    blue: state.angler.filter(fish => fish.fish.species === "blue").slice(0,5),
    channel: state.angler.filter(fish => fish.fish.species === "channel").slice(0,5),
    flathead: state.angler.filter(fish => fish.fish.species === "flathead").slice(0,5)
  }
}

function mapDispatchToProps(dispatch){
  return {
    getAngler: bindActionCreators(getAngler, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
