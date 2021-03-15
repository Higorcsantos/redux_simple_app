

const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'Javascript',
            lessons: [
                {id: 1, title: 'Primeira Aula'}
            ]
        },
        {
            id: 2,
            title: 'React JS',
            lessons: [
                {id: 1, title: 'Primeira Aula'},
                {id:2 , title: 'Segunda Aula'}
            ]
        }
    ]
}
export default function course(state = INITIAL_STATE, action){
    if(action.type ==="TOGGLE_LESSON"){
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module,
        }
    }
    console.log(action);
    return state;
    
}