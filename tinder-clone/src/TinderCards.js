import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Kim Namjoon',
            url: 'https://pbs.twimg.com/media/ElkOEMNUYAAWNkB.jpg'
        }, 
        {
            name:'Jeon Jungkook',
            url: 'https://i.pinimg.com/736x/14/0b/de/140bde2b7f2a3eee3dd6babe5b95162a.jpg'
        }
    ]);

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
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>    
                ))}
            </div>
        </div>
    )
}

export default TinderCards