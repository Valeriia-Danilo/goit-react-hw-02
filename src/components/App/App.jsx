import { useState, useEffect} from 'react'
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';
import css from './App.module.css'

export default function App() {
  const [comments, setComments] = useState(() => {

    const sevedComments = window.localStorage.getItem("saved-comments");

    if (sevedComments !== null) {
      return JSON.parse(sevedComments);
    }
  
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  
});

 useEffect(() => {window.localStorage.setItem("saved-comments", JSON.stringify(comments))}, [comments]);


  const totalFeedback = comments.good + comments.neutral + comments.bad;
  
  const updateFeedback = feedbackType => {
    setComments({
      ...comments,
      [feedbackType]: comments[feedbackType] + 1
    });


  }
  
const resetClicks = () => {
  setComments({
    good: 0,
    neutral: 0,
    bad: 0
  });
};
  
  const positivePercent = Math.round(((comments.good + comments.neutral) / totalFeedback) * 100);
  

  return (
    <div className={css.taskContainer}>
    <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetClicks={resetClicks } />
      {totalFeedback === 0 ? (
        <Notification/>
      ) : (
          <Feedback comments={comments} percent={positivePercent} />)}
    </div>

 ) 

}
  