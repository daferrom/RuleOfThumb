import React from 'react';
import Card from '../Card/Card';
import './cards.css'
import ListItem from '../ListItem/ListItem';


const Cards = () => {
  const ListItems = document.querySelectorAll("list-container ListItem")

  return (
  <div className='componentContainer'>
      <div className="titleSelectContainer">
      <h1 className="title">Previous Rulings</h1>
        <select className="select">
          <option className="option" value='listView' >List</option>
          <option className="option" value='gridView' >Grid</option>
        </select>
      </div>  
    <div className="list-container">
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>    
    </div>
    <div className="grid-container">
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
