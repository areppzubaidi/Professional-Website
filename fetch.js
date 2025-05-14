const fs = require("fs");
const https = require("https");  // Make sure this is only declared once
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

console.log("GITHUB_TOKEN:", GITHUB_TOKEN);
console.log("GITHUB_USERNAME:", GITHUB_USERNAME);
console.log("USE_GITHUB_DATA:", USE_GITHUB_DATA);
console.log("MEDIUM_USERNAME:", MEDIUM_USERNAME);

const ERR = {
  noUserName: "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium: "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}`
  });

  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };
}

