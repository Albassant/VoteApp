import React from 'react';
import Auth from '../modules/Auth';
import PollForm from '../components/PollForm.jsx';
import axios from 'axios';
import PollActions from '../actions/PollActions';
import PollStore from '../stores/PollStore';


function getStateFromFlux() {
    return {
        isLoading: PollStore.isLoading(),
        polls: PollStore.getPolls()
    };
}

class PollsPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = getStateFromFlux();
    this._onChange = this._onChange.bind(this);
  }
  
  _onChange() {
    this.setState(getStateFromFlux());
  }

  componentWillMount() {
    PollActions.loadPolls();
  }
  
  componentDidMount() {
    PollStore.addChangeListener(this._onChange);
  }
  
  componentWillUnmount() {
    PollStore.removeChangeListener(this._onChange);
  }
  
  handlePollDelete(poll) {
    //PollActions.deletePoll(poll.id);
    console.log("handlePollDelete");
  }
  
  handlePollClick(poll) {
    // TODO load selected poll form or visuals
    console.log("handlePollClick");
  }

  handlePollSubmit(event) {
    event.preventDefault();
    
    var formData = {
      options: []
    };
    
    // //collect all data from form for submission
    // $('#poll form').find('input').each(function() {
    //   if (this.name == "pollname") formData.pollname = this.value;
    //   else formData.options.push(this.value);
    // });
        
    PollActions.createPoll(formData);
  }

  render() {
    return (
      <PollsList polls={this.state.polls} onClick={this.handlePollClick} onDelete={this.handlePollDelete} />
    );
  }
}
//<PollForm polls={this.state.polls} onSubmit={this.handlePollSubmit}/>
export default PollsPage;



//     render() {
//         return (
//             <div className='App'>
//                 <h2 className='App__header'>NotesApp</h2>
//                 <NoteEditor onNoteAdd={this.handleNoteAdd} />
//                 <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
//             </div>
//         );
//     },
// });


