export const reducer = (state,action) => {  
  switch(action.type){
    case ACTIONS.ADD_ITEM:
      const newPeopleList = [...state.people,{id:new Date().getTime().toString(),name:action.payload.name}];
      return {
        ...state,
        people: newPeopleList,
        isModalOpen: true,
        modalContent: "item added"
      };
    case ACTIONS.NO_VALUE:
      return{
        ...state,
        isModalOpen: true,
        modalContent: "please enter value"
      }
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false
      }
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.payload.id)
      }
    default:
      throw new Error('No matching action type');
  }
}