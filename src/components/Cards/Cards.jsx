import React, { useState } from 'react';
import Card from '../Card/Card';
import './cards.css'
import ListItem from '../ListItem/ListItem';
import data from '../../dummyData/data.json'

const Cards = () => {
  const polls = data.data
  console.log(polls)    

  const [ listStyleName , setListStyleName ] = useState('list-container-active')
  const [ gridStyleName , setGridStyleName ] = useState('grid-container')
  
  // listen the click even on list view option
  const listSelected = () => {
    setListStyleName('list-container-active')
    setGridStyleName('grid-container')
  }
  // listen the click even on grid view option
  const gridSelected = () =>{
    setListStyleName('list-container')
    setGridStyleName('grid-container-active')
  }

  return (
  <div className='componentContainer'>
      <div className="titleSelectContainer">
      <h1 className="title">Previous Rulings</h1>
        <select className="select">
          <option className="option" value='listView' onClick={(e)=>listSelected(e)}>List</option>
          <option className="option" value='gridView' onClick={(e)=>gridSelected(e)}>Grid</option>
        </select>
      </div>
    <div className={listStyleName}>
      {polls.map((poll, index)=>
      <ListItem props={poll} key={index}/>
      )}        
    </div>
    <div className={gridStyleName}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
  )
};

export default Cards;
