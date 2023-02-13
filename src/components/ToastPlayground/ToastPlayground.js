import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const { addToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  function handleSubmit(event) {
    event.preventDefault();
    addToast(variant, message);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <Toast variant={variant}>{message}</Toast>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={e => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map(item =>
              <label key={item} htmlFor={item}>
                <input
                  id={item}
                  type="radio"
                  name="variant"
                  value={item}
                  checked={item === variant}
                  onChange={e => setVariant(e.target.value)}
                />
                {item}
              </label>)}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form >
  );
}

export default ToastPlayground;
