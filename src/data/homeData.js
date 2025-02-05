const homeData = {
    bio: {
        greeting: "Hello World, I'm Rui Pinheiro",
        subtitleOne: "I'm a Front-End Developer, passionate about creating intuitive and...",
        subtitleTwo: 'Here is where people would say "I\'m a developer", but I\'m going to do something a little different.',
    },
    codeBlocks: [
        `import React, { useState } from 'react';\n\nconst Button = ({ text, onClick }) => {\n  const [isVisible, setIsVisible] = useState(false);`
    ],
    socialLinks: [
        { platform: "github", link: "https://www.github.com", hoverColor: "#AC69DC" },
        { platform: "linkedin", link: "https://www.linkedin.com", hoverColor: "#0077b5" },
        { platform: "mail", link: "/contact", hoverColor: "#d14836" },
        { platform: "download", link: "/cv.pdf", hoverColor: "#4CAF50" },
    ],
};

export default homeData;
