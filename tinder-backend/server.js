import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
//cors -> adding headers to every request and for security
import Cors from 'cors';

/**App Configuration */ 
//creating instance: (1st step)
const app = express();
const port = process.env.PORT || 8001;
//(4th step) - after setting up in mongodb.com
const connection_url = "mongodb+srv://kweis:kw3iskw3is!@cluster0.wzcoi.mongodb.net/tinderDB?retryWrites=true&w=majority"

/** Middleware */
//(6th step)
app.use(express.json());
app.use(Cors());


/** DB Config */
//(5th step) then after go to dbCards.js to create Schema
//(7th step) then add on API whenever you want 
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

/** API Endpoints */
//status(200) meaning ok
//(2nd step)
app.get('/', (req, res) => res.status(200).send("HELLO PROGRAMMER"));

app.post('/tinder/card', (req, res) => { 
    const dbCard = req.body;
    //creating a new card element
    Cards.create(dbCard, (err, data) => { 
        if (err) { 
            //500 - internal server error
            res.status(500).send(err)
        } else { 
            //201 - means successfully created then just send back the data
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/card', (req, res) => { 
    //here, we don't want to create a card but find
    Cards.find((err, data) => { 
        if (err) { 
            //500 - internal server error
            res.status(500).send(err)
        } else { 
            //200 - means successfully found
            res.status(200).send(data)
        }
    })
})

/** Listener */
//to make the app listen
//(3rd step)
app.listen(port, () => console.log(`listening on localhost: ${port}`));