const form = document.querySelector("form");
const userName = document.querySelector("#name");
const age = document.querySelector("#age");

const userManager = {
    users: [],
    init: function() {
        form.addEventListener("submit", (e) => this.addUser.call(this, e));
    },
    addUser: function(e) {
        e.preventDefault();

        let newUser = {
            userName: userName.value,
            age: age.value
        };

        this.users.push({
            user: newUser,
            rendered: false
        });
        
        form.reset();
        this.renderUser();
    },
    renderUser: function() {
        this.users.forEach((entry)=>{

            if( !entry.rendered ) {
                console.log(entry.user.userName, ", ", entry.user.age);
            }
        })
    }
}

userManager.init();
