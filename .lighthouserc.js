module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000/", "http://localhost:3000/blog"],
      numberOfRuns: 3,
    },
    upload: {
      target: "temporary-public-storage", // You can change this to your preferred storage target
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": [
          "warn",
          { aggregationMethod: "optimistic", minScore: 0.93 },
        ],
        "categories:accessibility": [
          "error",
          { aggregationMethod: "optimistic", minScore: 0.95 },
        ],
      },
    },
  },
};
