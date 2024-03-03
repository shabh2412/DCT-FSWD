## Topics to be covered

1. mongoose
2. connect
3. Schema
   1. Syntax:
   ```js
   const schema = new mongoose.Schema({
     key: value, // key is the name of the field, and value is the data type of the field
   });
   ```
4. Model
   1. Syntax:
   ```js
   const model = mongoose.model("modelName", schema);
   ```
5. Querying
   1. Creating a `new` instance
   2. Saving instance
   3. Configuring schema further (nested format)
      1. Date
      2. required
      3. lowercase | uppercase
      4. default
      5. immutable
      6. min | max | minLength | maxLength
      7. Object Id
      8. Arrays
      9. Schema
   4. Validation in schema
   5. Catching errors
   6. Finding / Selecting data

# Resources

Connection URI: `mongodb+srv://<username>:<password>@cluster0.v9a14sg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

Schema Type: `https://mongoosejs.com/docs/api/schematype.html`
