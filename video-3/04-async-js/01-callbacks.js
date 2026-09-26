// sync : code that runs line by line
// async : code that runs once it is ready to run

// callback fnc => function passed as a parameter to another function
// callback hell => before promises, async

// callback calling a callback, calling another callback
function profileLekarAao(username, call_back) {
    setTimeout(()=>{
        console.log(`profile fetched of ${username}`);
        call_back({username, age: 20, email: "huihui@hui.com"});
    }, 2000);
}

function postsLekarAao(_id, call_back) {
    setTimeout(()=>{
        console.log(`posts fetched of ${_id}`);

        setTimeout(()=>{
            call_back(["post1", "post2", "post3"]);
        }, 3000);
    }, 2000);

}

profileLekarAao("harsh", function (profileData) {

    postsLekarAao(profileData._id, function(posts){
        console.log(posts);
    })
    // console.log(profileData); 
});