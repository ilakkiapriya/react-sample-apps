import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { myfavplaces } from './myfavplaces';
import Scroll from './Scroll';
import 'tachyons';


class App extends Component {
  constructor(){
    super()
    this.state = {
  //    myphotos : myphotos,
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {

    const filteredname = myfavplaces.filter(myfavplaces =>{
      return myfavplaces.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className='tc'>
        <h1> My BucketList </h1>
        <SearchBox searchchange={this.onSearchChange} />
        <Scroll>
          <CardList myfavplaces={filteredname}/>
        </Scroll>
      </div>
    );
  }

}

export default App;
