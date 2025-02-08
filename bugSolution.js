```javascript
//Correct usage of $inc operator with check for existing value
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true });
//Alternative using findAndUpdate for atomicity
let counter = db.collection('counters').findOneAndUpdate({ _id: 'myCounter' }, { $inc: { sequence: 1 } }, { upsert: true, returnOriginal: false});
let sequence = counter.value.sequence;
```