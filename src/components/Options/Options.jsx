import css from './Options.module.css'

export default function Options({ updateFeedback, totalFeedback, resetClicks }) {
   return (
        <div className={css.buttonContainer}>
        <button className={css.button} onClick={() => updateFeedback('good')}>Good</button>
        <button className={css.button} onClick={() => updateFeedback('neutral')}>Neutral</button>
        <button className={css.button} onClick={() => updateFeedback('bad')}>Bad</button>
       {totalFeedback !== 0 && (
                <button className={css.button} onClick={resetClicks}>Reset</button>
            )}
    </div>
    )
 
}