module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"], // URL of your Next.js development server
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
