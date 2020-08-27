let initialState = {
  friends: [
    {
      id: 1,
      name: "Rashid Ibragimov",
      avatar: "https://www.svgrepo.com/show/65453/avatar.svg"
    },
    {
      id: 2,
      name: "Dmitry Petrov",
      avatar: "https://www.svgrepo.com/show/63886/avatar.svg"
    },
    {
      id: 3,
      name: "Vasily Fedorov",
      avatar: "https://www.svgrepo.com/show/83466/avatar.svg"
    },
    {
      id: 4,
      name: "Theodor Slonsky",
      avatar: "https://www.svgrepo.com/show/29870/avatar.svg"
    }
  ]
};

const sidebarReducer = (state = initialState, action) => {

  return state;
}

export default sidebarReducer;