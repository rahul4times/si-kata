import {
  GET_ANGLER_PENDING,
  GET_ANGLER_SUCCESS
} from '../actions/angler';

export default (state=[], action) => {
  switch(action.type){
    case GET_ANGLER_PENDING:
      return state;
    case GET_ANGLER_SUCCESS:

    const fishWeight = action.payload.data.map(fish => {
      return { fish, weight: Math.round(fish.length * fish.girth * fish.girth / 800)};
    });

    const sortedFish = fishWeight.sort((a,b) => b.weight - a.weight)

      return sortedFish
    default:
        return state;
  }
}
