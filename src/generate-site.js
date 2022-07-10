const generateTeam = (team) => {
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