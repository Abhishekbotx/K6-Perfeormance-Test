const express= require('express');
const app=express()
const ip=require('ip')

app.use(express.json())
app.get('/', (req, res) => {    
    res.send('Server running successfully!')
})
app.get('/ping', (req, res) => {    
    console.log(req.query)
    console.log(req.body)
    const ipAddress=ip.address();
    // const ipAddress2=ip.isPrivate(ipAddress);
    // console.log('ipAddress2:', ipAddress2);
    
    return res.json({message:'pong: ' + ipAddress})
})

const handleAndPrepareServer = () => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
}

handleAndPrepareServer();