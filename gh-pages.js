var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/maasiimka/resume.git", // Update to point to your repository
    user: {
      name: "Max", // update to use your name
      email: "mrozisalovec@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
