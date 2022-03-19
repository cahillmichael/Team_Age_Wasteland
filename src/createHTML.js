const createHTML = function(team) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"/>
        <title>Team Members</title>
    </head>

    <body>
        <header class="text-center" style="background-color:#e74756; color:white; padding: 30px;">
            <h1>My Team</h1>
        </header>
                <div class="container d-inline-flex" style="padding: 30px; justify-content: center;">
                    ${createCards(team)}
                </div>
    </body>
</html>
`
}

const createCards = function(team) {
    return `
    ${team.filter(employee => employee.getRole() === 'Manager').map(({name, id, email, officeNumber}) => {
        return `
                <div class="card" style="margin: 3%; max-width: fit-content;">
                    <div class="card-header" style="background-color: #0077f7;">
                        <h2 style="color:white">${name}</h2>
                        <h3 style="color:white">Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            `
        }).join('')
    }
    `;
}

module.exports = createHTML;