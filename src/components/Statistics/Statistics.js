import PropTypes from 'prop-types';
import randomColor from '../../utils/random-color';
import styles from './Statistics.module.scss';

const Statistics = props => {
  return (
    <ul className={styles.Statistics__StatsList}>
      {Object.entries(props).map(statisticData => {
        return (
          <li
            key={statisticData[0]}
            className={styles.Statistics__StatsListItem}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.Statistics__StatsListItemLabel}>
              {statisticData[0]}
            </span>
            <span className={styles.Statistics__StatsListItemPercentage}>
              {statisticData[1]}
              {statisticData[0] === 'likes' && '%'}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  likes: PropTypes.number,
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  likes: 0,
};

export default Statistics;
