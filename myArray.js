function MyArrayPrototype() {
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  };

  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  this.filter = function (callback){
    const newMyArr = new MyArray ();
    for (let i=0; i<this.length; i++){
      if(callback(this[i],i,this)){
        newMyArr.push(this[i]);
      }
    }

  }
}
