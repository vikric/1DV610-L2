import { HTTPHelper } from "./HTTPHelper.js";

const helper = new HTTPHelper();

const post = await helper.post('https://jsonplaceholder.typicode.com/posts/', {title: 'Kalle'})
console.log(post)

const getter = await helper.get("https://jsonplaceholder.typicode.com/posts/1");
console.log( getter);

const del = await helper.delete("https://jsonplaceholder.typicode.com/posts/1")
console.log(del)
