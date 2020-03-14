let posts = [
    {title:'fasting',body:'fasting is good'},
    {title:'keto',body:'keto helps with weightloss'}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} : ${post.body}</li>`
        });
        document.body.innerHTML = output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
     });
}


createPost({title:'diet', body:'exercise is the key'})
    .then(getPosts)
    .catch(err => console.log(err));
