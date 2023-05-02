const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storeUser(obj){
	localStorage.setItem('user',obj)
}
storeUser(JSON.stringify(user))
