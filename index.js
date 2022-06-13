function User(fname, Iname, age, isMale, email, isSubscribed = false) {
  this.fname = fname;
  this.Iname = Iname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

function UserPrototype() {
  this.fullName = function () {
    return `${this.fname} ${this.Iname}`;
  };
}

User.prototype = new UserPrototype();

function creatUser(amonts = 1) {
  const arrUser = [];
  for (let i = 0; i < amonts; i++) {
    const user = new User(
      `Elon${i}`,
      `Mask${i}`,
      Math.ceil(Math.random() * (60 - 20) + 20),
      Math.random() > 0.5,
      `EM${i}@gmail.com`
    );
    arrUser.push(user);
  }
  return arrUser;
}

const users = creatUser(20);
console.table(users);

const arrFullName = users.map(function (user) {
  return user.fullName();
});
// console.table(arrFullName);

// массив людей старше AGE_LIMIT
const arrAge40 = users.filter(function (user) {
  return user.age >= AGE_LIMIT;
});
//console.table(arrAge40);

//поменять значение подписки
users.forEach(function (element) {
 element.isSubscribed = Math.random() > 0.5;
});
console.table(users);

//получить массив почт пользователей до 40 лет, женского пола, с подпиской

// получть массив полных имен пользователей которые мужчины младше 40 и без подписки

const newArrFullName = users
  .filter(function (user) {
    return user.age < AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isSubscribed === false;
  })
  .map(function (user) {
    return user.fullName();
  });
console.table(newArrFullName);



//посчитать возраст

const newArrFullName2 = users
  .filter(function (user) {
    return user.age < AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isSubscribed === false;
  }) 
const allAge = newArrFullName2.reduce(function(result,user){
  return result+user.age
},0)
