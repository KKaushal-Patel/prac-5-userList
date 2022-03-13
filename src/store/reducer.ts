// import {AppDispatch} from '../store/store'
const initialUsersState = {
  users: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      isOwner: true,
      isActive: true,
      clicksReviewed: "3,450",
      monthlyClicks: "9800",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "1,450",
      monthlyClicks: "1000",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "5400",
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "6,450",
      monthlyClicks: "2300",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "3,450",
      monthlyClicks: "3000",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      isOwner: false,
      isActive: false,
      clicksReviewed: "2,450",
      monthlyClicks: "4000",
    },
  ],
};

const hoverHandlerReducer = (state = initialUsersState, action: { type: string; payload: number }) => {
  if (action.type === "onMouseOver") {
    return {
      ...state,
      id: action.payload - 1,
    };
  } 
  if (action.type === "onRemove") {
    const [newId] = state.users
    // id:action.payload
    return {
     ...state,
     

    };
  } else return state;
};

export default hoverHandlerReducer;
