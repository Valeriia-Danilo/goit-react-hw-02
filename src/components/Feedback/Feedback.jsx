
import css from './Feedback.module.css';

export default function Feedback({ comments, percent }) {
    return (
        <div className={css.feedbackCantainer}>
        <p className={css.good}>Good: {comments.good}</p>
        <p className={css.neutral}>Neutral: {comments.neutral}</p>
        <p className={css.bad}>Bad: {comments.bad}</p>
        <p className={css.positive}>Positive: {percent} % </p>
    </div>
)
}