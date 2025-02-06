export const navItems = [
  {
    name: "Academics",
    children: [
      { name: "Academics", path: "/academics" },
      {
        name: "College",
        children: [
          {
            name: "College of Arts, Social Sciences, and Education",
            path: "/departments/cassed",
          },
          {
            name: "College of Computing and Information Sciences",
            path: "/departments/ccis",
          },
          {
            name: "College of Hospitality and Tourism Management",
            path: "/departments/chtm",
          },
          {
            name: "College of Business",
            path: "/departments/cob",
          },
          {
            name: "College of Criminology",
            path: "/departments/coc",
          },
          {
            name: "College of Engineering",
            path: "/departments/coe",
          },
          { name: "College of Nursing", path: "/departments/con" },
        ],
      },
    ],
  },
  {
    name: "Research",
    children: [{ name: "Research", path: "/research" }],
  },
  {
    name: "Admission",
    children: [
      {
        name: "Elementary Education",
        path: "/admission/elementary",
      },
      {
        name: "Junior High School",
        path: "/admission/junior-high",
      },
      {
        name: "Senior High School",
        path: "/admission/senior-high",
      },
      {
        name: "College",
        path: "/admission/college",
      },
      {
        name: "Post Graduate",
        path: "/admission/post-graduate",
      },
    ],
  },
];
