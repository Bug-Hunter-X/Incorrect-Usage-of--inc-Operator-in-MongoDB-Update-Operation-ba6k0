```javascript
//Incorrect usage of $inc operator in MongoDB update operation
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence: -1 } });
```