
const initialState ={
    categories:[{
        name:'ELECTRONICS',
        displayName: 'ELECTRONICS',
        description:'CATEGORY OF ALL THE ELECTRONIC DEVICES'
    },{
        name:'Food',
        description:'CATEGORY OF ALL THE FOOD TYPES'
    }],
    activeCategory:[]
}

export default (state = initialState,action)=>{
    let {type,payload} = action;
    switch(type){
        case'ACTIVE_CATEGORY':
        let elements ={}
        let activated = state.categories.filter(item =>{
            if (item.name === payload) {
                return elements = item
            }
        })
        return {
            categories: state.categories, 
            activeCategory:elements
        };
        default:
            return state;
    }
}

export function active(name){
    return{
        type:'ACTIVE_CATEGORY',
        payload:name
    }
}