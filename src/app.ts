import express from 'express';
import userRouter from './routers/userRouter.js';

const app = express();



app.use("/", userRouter);



app.get('/', (req, res) => {
    res.send('Hello World!');
});


 
app.listen(3000, () => {
    console.log('Server 2 is running on port 3000!');
});
 