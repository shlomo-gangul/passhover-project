async function getUsers() {
    let UsersList = await fetch('https://next.json-generator.com/api/json/get/NJ-UoW2Xq');
    let Users = await UsersList.json();
    let HTML = '';

    for (let user of Users) {
        HTML += `<div id="${user['index']}" class="card shadow m-1 mb-4 bg-white rounded""> `
        for (let userKey in user) {
            if (typeof user[userKey] === "object") {
                HTML += `<li class="list-group-item text-capitalize"><h5>${userKey}: `
                for (let nameKey in user[userKey]) {
                    HTML += `${user[userKey][nameKey]}`
                }
                HTML += `</h5></li>`
            } else if (userKey === 'picture') {
                HTML += ` <img class="card-img-top" src="${user[userKey]}" > <ul class="list-group list-group-flush">`
            }
            else if (user[userKey] != user['_id'] && user[userKey] != user['picture'] && user[userKey] != user['index']) {
                HTML += `<li class="list-group-item text-capitalize"> ${userKey}: ${user[userKey]}</li> `
            }
        }
        HTML += ` </ul></div>`

    }
    mainDiv.innerHTML += HTML

    infoInTableForm.addEventListener('click', () => {
        HTML = ''
        HTML += `<table class="table table-hover table-dark" > `

        for (let user of Users) {
            if (user['index'] < 1) {
                HTML += `<tr>`

                for (let thKey in user) {
                    if (user[thKey] != user['_id'] && user[thKey] != user['index']) {
                        HTML += ` <th scope="col"> ${thKey}</th>`

                    }
                }
            }

            HTML += `</tr>`


            HTML += `<tr>`
            for (let userKey in user) {
                if (typeof user[userKey] === "object") {
                    HTML += `<td>`
                    for (let nameKey in user[userKey]) {
                        HTML += ` ${user[userKey][nameKey]} `
                    }
                    HTML += `</td>`
                } else if (userKey === 'picture') {
                    HTML += `<td> <img src="${user[userKey]}" ></td>`
                }
                else if (user[userKey] != user['_id'] && user[userKey] != user['picture'] && user[userKey] != user['index']) {
                    HTML += ` <td>${user[userKey]}</td> `
                }
            }
            HTML += `</tr>`

        }
        HTML += `</table>`
        mainDiv.innerHTML = HTML
    });

    register.addEventListener('click', () => {
        HTML = ''
        HTML += `<form id="registerForm" class="mx-auto ">
    <div class="form-row">
        <div class="col-md-6 mb-3 ">
            <label class="text-light" for="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" required>
        </div>

        <div class="col-md-6 mb-3" >
            <label class="text-light" for="lname"">Last name:</label><br/>
            <input type="text" id="lname" name="lname" required>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3 ">
            <label class="text-light" for="email"> email:</label><br/>
            <input type="email" id="email" name="email" required>
   
        </div>
        <div class="col-md-6 mb-3 ">
            <label class="text-light" for="email2"> re email:</label><br/>
            <input type="email" id="email2" name="email2" required>
  
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6 mb-3 ">
            <label class="text-light" for="phone"> phone number:</label><br/>
            <input type="text" id="phone" name="phone" required>
        </div>
        <div class="col-md-6 mb-3 ">
            <label class="text-light" for="age">age: </label><br/>
            <input type="text" id="age" name="age" required>
    
        </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3  ">
        <button class="btn btn-secondary" id="submitForm" type="button" >Submit</button>
        <p class="bg-danger text-light" id="errorMsg"><p>
        </div>
        </div>
      </form>
       `


        mainDiv.innerHTML = HTML
        submitForm.addEventListener('click', () => {
            if (email.value === email2.value) {
                HTML += `${fname.value} ${lname.value} register successfully`;
            } else {
                errorMsg.innerHTML += `pls check the from the fill it again`;
                setTimeout(() => {
                    errorMsg.innerHTML = ''
                }, 3000);

            }
            mainDiv.innerHTML = HTML
        });

    });
    for (let user of Users) {
        HTML = ''
        document.getElementById(`${user['index']}`).addEventListener('click', () => {
            HTML += `<div class="card">`
            for (userKKey in user) {
                if (typeof user[userKKey] === "object") {
                    HTML += `<h4 class="card-title">`
                    for (let nameKey in user[userKKey]) {
                        HTML += `${user[userKKey][nameKey]} `
                    }
                    HTML += `<h4/>`
                } else if (userKKey === 'picture') {
                    HTML += ` <img src="${user[userKKey]}" >`
                }
                else if (user[userKKey] != user['_id'] && user[userKKey] != user['picture'] && user[userKKey] != user['index']) {
                    HTML += ` <h5>${user[userKKey]}</h5> `
                }

            }
            HTML += `</div>`
            mainDiv.innerHTML = HTML
        })


    }



}
getUsers();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}