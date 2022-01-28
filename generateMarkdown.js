function generatelicense(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    else if (license === "MPL 2.0") {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else {
        return '';
    }
}
function generatereadme(pop) {
    return userResponses(pop) 
    //+ '\n' + tableofcon()
}
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// function title(response){
//     return `# ${response.project_name}`
// }

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
function userResponses(response){
    return `# ${response.project_name}
    # Table of Contents
        * [Description](#description)
        * [License](#license)
        * [Tests](#tests)
        * [Dependencies](#dependencies)
        * [Usage](#usage)
        * [Contribution](#contributions)
        * [Questions](#questions)
    # Description
    ${response.description}
    # License
    ${response.license}
    # Tests
    ${response.test}
    # Dependencies
    ${response.dependencies}
    # Usage
    ${response.use}
    # Contributions
    ${response.contribute}
    # Questions `
}
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// function tableofcon(){
//     return `## Table of contents 
//     - Description
//     - License
//     - Test
//     - Dependecies
//     - Usage
//     - Contribution
//     - Questions`
// }

module.exports = generatereadme;