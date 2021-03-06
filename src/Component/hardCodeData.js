import React, {Component} from 'react';
import {render} from 'react-dom'
import {
  BrowserRouter as
   Router,
   Route,
    Link
  } from "react-router-dom";
  import {Switch} from "react-router-dom";

//soft data to have some to test to see if we can reach it.

const contacts = [
    { name: "Lonzo Ball", number: "111-111-1111", email: "pgFirst@none.edu", image:"https://en.wikipedia.org/wiki/Lonzo_Ball#/media/File:20160330_MCDAAG_Lonzo_Ball_handle.jpg" },
    { name: "Rajon Rondo", number: "222-222-2222", email: "pgSecond@none.edu", image:"https://en.wikipedia.org/wiki/Rajon_Rondo#/media/File:Rajon_Rondo,_Kelly_Oubre_Jr._(38294689275)_(cropped).jpg" },
    { name: "Joel Berry II", number: "333-333-3333", email: "pgThird@none.edu", image:"https://en.wikipedia.org/wiki/Joel_Berry_II#/media/File:Joel_Berry_UNC.jpg" },
    { name: "Kentavious Caldwell-Pope", number: "444-444-4444", email: "sgFirst@none.edu", image:"https://en.wikipedia.org/wiki/Kentavious_Caldwell-Pope#/media/File:Kentavious_Caldwell-Pope_2014_2.jpg" },
    { name: "Josh Hart", number: "555-555-5555", email: "sgSecond@none.edu", image:"https://en.wikipedia.org/wiki/Josh_Hart#/media/File:20170213_Villanova-Depaul_Josh_Hart_cropped.jpg" },
    { name: "Isaac Bonga", number: "666-666-6666", email: "sgThird@none.edu", image:"https://en.wikipedia.org/wiki/Isaac_Bonga#/media/File:Isaac_Bonga.jpg" },
  ];
//==============================================================================

function ContactRouter(){
  return (

    <div>

        <Router>
          <Route path="/contacts/" component={ContactList} />
        </Router>
        <Router>
          <Route  path="/contacts/:number" component={Player} />
        </Router>

    </div>
  )
};


//==============================================================================

function ContactList () {
//alex said we should call this contactRouter to make things make more since.
  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({name, number}) => (
          <li key={number}>
            <Link to= {`/contacts/${number}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
};

//==============================================================================

function Player ({match}) {
  const contact = contacts.find(({ number }) => number === match.params.number)
  return (
    <div>
      <h2>Call {contact.name} </h2>
      <h4> {contact.number}</h4>
      <h4>{contact.email}</h4>
      <iframe><img href={contact.image} alt="player" /></iframe>
      <hr />
    </div>
  )
};





export default ContactRouter;
