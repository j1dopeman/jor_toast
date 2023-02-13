import React from 'react';

import { ToastContext } from '../ToastProvider'
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);
  //const  = toastObj;

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification">
      {toasts.map(item => <li
        key={item.id} className={styles.toastWrapper}>
        <Toast
          handleDismiss={() => removeToast(item.id)}
          variant={item.variant}>{item.message}</Toast>
      </li>)}
      {/*<li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>*/}
    </ol>
  );
}

export default React.memo(ToastShelf);
