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
}


function userResponses(response){
    return `# ${response.project_name}
## Table of Contents
* [Description](#description)
* [License](#license)
* [Tests](#tests)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Contribution](#contributions)
* [Questions](#questions)

 ## Description 
    ${response.description}
## License 
    ${response.license}
## Tests 
    ${response.test}
## Dependencies 
    ${response.dependencies}
## Usage 
    ${response.use}
## Contributions 
    ${response.contribute}
## Questions
    Connect with me on Github: https://github.com/${response.github}  or contact me for any other questions ${response.email}. `
}

module.exports = generatereadme;