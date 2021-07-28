import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return <h3 className={styles.Notification}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: 'Where is your message?',
};

export default Notification;
