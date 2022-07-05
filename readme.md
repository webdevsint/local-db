# local-db
a wrapper for localStorage on the web

adding to your project:
```
<script src="https://raw.githubusercontent.com/webdevsint/local-db/main/index.js"></script>
```

## usage
initializing the database:
```
const db = new LocalDB();
```

adding an entry:
```
const db = new LocalDB();

db.write("xyz", { message: "hello world" });
```

reading an entry:
```
const db = new LocalDB();

db.read("xyz");
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
