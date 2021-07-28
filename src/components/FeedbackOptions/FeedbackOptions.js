import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.FeedbackOptions__ButtonList}>
      {options.map(feedbackName => {
        return (
          <li key={feedbackName}>
            <Button
              type="button"
              label={feedbackName}
              width="80px"
              whenClicked={onLeaveFeedback}
            />
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
