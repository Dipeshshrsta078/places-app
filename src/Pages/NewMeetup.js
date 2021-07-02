import React from 'react';
import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../Components/Meetups/NewMeetupForm';
const NewMeetup = () => {
    const history = useHistory();
    const handleAddMeetup = (meetupData) => {
        const formSubmit = async () => { 
            const response = await fetch(
            'https://react-meetup-wab-app-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header: {
                    'content-type': 'application/json'
                }
            });
            //const data = await response.json();
            return history.replace('/');

        };
        formSubmit();
    };
    return (
        <section>
            <h1>Add New place</h1>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </section>
    )
};

export default NewMeetup;