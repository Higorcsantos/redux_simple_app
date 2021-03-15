import React from 'react';
import {connect} from 'react-redux'

const Video = ({activeModule,activeLesson}) => ( 
    <div>
        <h2>{activeModule.title}</h2>
        <h4>{activeLesson.title}</h4>
    </div>)


export default connect(state=> ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
}))(Video);