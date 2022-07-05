const bucket = localStorage;

class LocalDB {
  constructor() {
    this.bucket = bucket;

    this.storage = () => {
      let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
      }

      return values;
    };

    this.write = (id, obj) => bucket.setItem(id, JSON.stringify(obj));
    this.read = (id) => JSON.parse(bucket.getItem(id));
    this.remove = (id) => bucket.removeItem(id);

    this.clear = () => bucket.clear();
  }
}