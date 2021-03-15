import React from 'react';
import {connect} from 'react-redux'

import * as ActionSidebar from '../../store/actions/course'

const Sidebar = ({modules,toggleLesson}) => (
    
    <aside>
        {modules.map(module => (
            <div key = {module.id}>
                <h2>{module.title}</h2>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key = {lesson.id}>{lesson.title}
                            <button onClick ={() => toggleLesson(module,lesson) }>Select</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

const mapStateToProps = state => ({modules: state.course.modules});
const mapDispatchToProps = dispatch => ({
    toggleLesson: (module,lesson) => dispatch(ActionSidebar.toggleLesson(module,lesson))
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);