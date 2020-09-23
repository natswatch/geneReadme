const generateBadges = licensesArr => {
    
  const badgesMdArr = licensesArr.map((license) => {
    if (license === "MIT") {
      return `
        ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)
      `
    } else if (license === 'ISC') {
      return `
        ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)(https://opensource.org/licenses/ISC)
      `
    } else if (license === 'GNU GPL v2') {
      return `
        ![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
      `
    } else {
      return `
      ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)
      `
    }
  });

  return badgesMdArr.join(' ');
};

// function to generate markdown for README
const generateMarkdown = data => {
  
  const {
    title, 
    description, 
    installation, 
    usage, 
    licenses, 
    contributing, 
    tests, 
    github, 
    email
  } = data;

  return `
  # ${title}

  ${generateBadges(licenses)}

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License(s)
  ${licenses.join(', ')}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions?
  find me on Github [${github}]()
  email me: ${email}

  `;
}

module.exports = generateMarkdown;
