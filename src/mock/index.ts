const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJqb2huLmRvZUBnbWFpbC5jb20iLCJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.14sPkLkbtdKAKGQnFuxX-dFjw9X4ayQTlfivrYUvcs8";

const games = [
  {
    id: 1,
    title: "Luštěniny 2018",
    teams: 10,
    cyphers: 10,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:7df831b3-1bb2-5294-8c6a-04ac0d6c3868/component?assetType=TEMPLATE&etag=2a86206b724e414dad76439f866fcf9c&revision=428ac87a-5841-49ce-a300-c0d6b30e9d95&component_id=72db8e16-46b1-4df8-814b-f846e5b693cb"
  },
  {
    id: 2,
    title: "Luštěniny 2019",
    teams: 12,
    cyphers: 10,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:5c5915e1-ff51-5471-9406-fabb08d0e4d9/component?assetType=TEMPLATE&etag=4d76a96747ab48eaa83b8c1004b8de6e&revision=4d9a7d99-cbf0-4417-91de-6d7b7b491104&component_id=4558728f-e6d2-4721-a621-d24ac50e035e"
  },
  {
    id: 3,
    title: "Luštěniny 2020",
    teams: 20,
    cyphers: 10,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:097aa5b6-693d-459b-897f-7568301d8048/component?assetType=TEMPLATE&etag=feddb96964680b4337605c51100df18e&revision=0&component_id=af63f8f1-cbfa-4d53-bc3e-9cb98a92da44"
  },
  {
    id: 4,
    title: "Luštěniny 2021",
    teams: 22,
    cyphers: 9,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:ae798621-3ded-42f6-b363-126160bcce67/component?assetType=TEMPLATE&etag=bac54237b78abff806b9c0e17dda063d&revision=0&component_id=d546267a-8b5b-43db-be74-a2f95af7cc4a"
  },
  {
    id: 5,
    title: "Luštěniny 2022",
    teams: 23,
    cyphers: 8,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:9467d422-eb5f-47ed-9c9d-c0325f72b741/component?assetType=TEMPLATE&etag=e0c2e402ae8aeaef0924dd68eb55a19f&revision=0&component_id=412c18e0-eab7-4cfe-856f-c5e17dd48e80"
  },
  {
    id: 6,
    title: "Luštěniny 2023",
    teams: 27,
    cyphers: 8,
    logo: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:8082149e-b1e9-4d0f-8a9b-3f940142b992/component?assetType=TEMPLATE&etag=6bab6c5162149fb1a674a35376d11ccd&revision=0&component_id=2c0dd97c-0dfc-4bae-9345-e05c006b2792"
  }
];

const gameOverview = {
  teams: [
    {
      name: "Vítězové",
      points: 50,
      members: 4,
      activeCypher: 6,
      cyphers: ["solved", "solved", "solvedWithHelp", "solved", "skipped", "solved", "solvedWithHelp", "active"]
    },
    {
      name: "La kukaračita",
      points: 40,
      members: 3,
      activeCypher: 7,
      cyphers: ["solved", "solved", "solvedWithHelp", "solved", "skipped", "solvedWithHelp", "active", "locked"]
    },
    {
      name: "Abakus",
      points: 40,
      members: 4,
      activeCypher: 5,
      cyphers: ["solved", "solved", "solved", "solved", "active", "locked", "locked", "locked"]
    },
    {
      name: "Svědkové baronovi",
      points: 35,
      members: 4,
      activeCypher: 6,
      cyphers: ["solved", "solved", "solvedWithHelp", "solved", "skipped", "active", "locked", "locked"]
    },
    {
      name: "Anonymní alkoholici",
      points: 35,
      members: 2,
      activeCypher: 5,
      cyphers: ["solved", "solvedWithHelp", "solved", "solved", "active", "locked", "locked", "locked"]
    },
    {
      name: "Nejlepší tým",
      points: 25,
      members: 2,
      activeCypher: 5,
      cyphers: ["solved", "solvedWithHelp", "skipped", "solved", "active", "locked", "locked", "locked"]
    },
    {
      name: "Luštitelé",
      points: 25,
      members: 2,
      activeCypher: 5,
      cyphers: ["skipped", "solvedWithHelp", "solved", "solved", "active", "locked", "locked", "locked"]
    },
    {
      name: "Bídníci",
      points: 15,
      members: 2,
      activeCypher: 5,
      cyphers: ["skipped", "solvedWithHelp", "skipped", "solved", "active", "locked", "locked", "locked"]
    },
    {
      name: "Marní",
      points: 5,
      members: 2,
      activeCypher: 4,
      cyphers: ["skipped", "solvedWithHelp", "skipped", "active", "locked", "locked", "locked", "locked"]
    }
  ]
};

export const mocks = {
  token,
  games,
  gameOverview
};
