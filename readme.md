# local-db
a wrapper for localStorage on the web

adding to your project:
```
<script src="https://webdevsint.github.io/local-db/index.js"></script>
```

## usage
initializing the database:
```
const db = new LocalDB();
```

adding an entry:
```
const db = new LocalDB();

db.write("xyz", { message: "hello world!" }); // id, object
```

editing an entry:
```
const db = new LocalDB();

db.rewrite("xyz", { message: "bye world!" }); // id, object
```

reading an entry:
```
const db = new LocalDB();

db.read("xyz"); // id
```

removing an entry:
```
const db = new LocalDB();

db.remove("xyz"); // id
```

getting all entries:
```
const db = new LocalDB();

const data = db.storage();
```

clearing the database:
```
const db = new LocalDB();

db.clear();
```
