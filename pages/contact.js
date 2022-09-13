import React from 'react'
import styles from '../styles/Contact.module.css'
export const contact = () => {
  return (
    <div>
      <section className={styles.contact}>
        <div className={styles.contact_box}>
          <div className={styles.contact_links}>
            <div className={styles.h2}>CONTACT</div>

          </div>
          <div className={styles.contact_form_wrapper}>
            <form>
              <div className={styles.form_item}>
                <input className={styles.input} type="text" name="sender" required />
                <label className={styles.label}>Name:</label>
              </div>
              <div className={styles.form_item}>
                <input className={styles.input} type="text" name="email" required />
                <label className={styles.label}>Email:</label>
              </div>
              <div className={styles.form_item}>
                <textarea className={styles.textarea} name="message" required></textarea>
                <label className={styles.label}>Message:</label>
              </div>
              <div className={styles.buttons_div}>
                <button className={styles.submit_btn}>Send</button> 

              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default contact;
