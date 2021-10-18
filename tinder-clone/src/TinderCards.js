import { SwipeableDrawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from './axios';

function TinderCards() {
    /** set empty array since it will be added soon on the DB */
    /** 
     * people - variable name 
     * setPeople - "setter" function for the variable
     */
    const [people, setPeople] = useState([]);

    //used for connecting frontend and backend 
    useEffect(() => {
        //async - it waits for a function
        async function fetchData() { 
            //get all tindercards from the database
            //await - waiting for the response
            const req = await axios.get('/tinder/card');

            //then set people
            setPeople(req.data);
        }

        fetchData();

    }, []) /** the empty brackets are for when the TinderCards.js loads
    it will run this piece of code once. when there is [name] and when the variable 
    name changes, it will refire the code - this is where useEffect will be used*/

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return(
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map (person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]} // we don't want to swipe up and down
                        onSwipe={(dir) => swiped(dir, person.name)} //create a function called swiped 
                        onCardLeftScreen={() => outOfFrame(person.name)} //create function called outOfFrame
                        > 
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>    
                ))}
            </div>
        </div>
    )
}

export default TinderCards