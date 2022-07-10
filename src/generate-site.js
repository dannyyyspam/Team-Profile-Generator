const Manager = require("../lib/Manager.js");

const generateTeam = (team) => {
    console.log(team);
    // Create an empty array to push html elements on to and loop through the team data
    const html = [];
    // Create functions for each type of employee that returns HTML data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = ` <div class="card employee-card">
           <p>ManagerInfo</p>
        </div>
        `;
        html.push(managerHtml);
    }

    // create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
    }

    // join the HTML blocks
    return html.join('');
}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<body>
     ${generateTeam(team)}
</body>
</html>
    `;
}