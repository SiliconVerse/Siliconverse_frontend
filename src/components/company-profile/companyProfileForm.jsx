import { useState } from 'react';
import styles from './companyProfile.module.css';
import { ReactPortal } from '../../hooks/portal';
import { Upload } from 'lucide-react';
import CompanyModalUpdates from '../company-api-modal/companyModal';

const CompanyProfileForm = () => {
  const [caption, setCaption] = useState('');
  const [post, setPost] = useState('');
  const [show, setShow] = useState(false);
  function handleSaveClick() {
    setShow(true);
  }
  return (
    <>
      <form className={styles.form}>
        <div className={styles.head}>
          <h3>Magazine Post</h3>
          <p>
            After you share your post, it will be uploaded to the internship and
            magazine page.
          </p>
        </div>
        <article>
          <section className={styles.formGroup_container}>
            <div className={styles.formGroup}>
              <aside>
                <label htmlFor='caption'>{'Caption:'}</label>
                <input
                  type='text'
                  id='caption'
                  placeholder='Enter caption here...'
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </aside>
              <textarea
                name='post'
                placeholder='Write your post...'
                value={post}
                rows={
                  post.length > 300
                    ? 10
                    : post.length > 200
                    ? 8
                    : post.length > 100
                    ? 6
                    : 4
                }
                onChange={(e) => setPost(e.target.value)}
              />
            </div>
            <aside className={styles.formGroup_btns}>
              <button
                type='button'
                className='flex gap-4 items-center'>
                <span>
                  <Upload
                    size={20}
                    className='text-black text-center'
                  />
                </span>
                Upload File
              </button>
              <span className={styles.btn_text}>
                You can Upload a media or document file
              </span>
              <button
                type='button'
                className={styles.formGroup_btn + ' ' + styles.btn_2}
                onClick={handleSaveClick}>
                Save
              </button>
            </aside>
          </section>
          <span className={styles.btn_text_show}>
            You can Upload a media or document file
          </span>
        </article>
      </form>
      {/* Modals for states of form response */}
      {show && (
        // The Portal can receive the setShow state to close the modal also
        <ReactPortal setState={setShow}>
          {/* This should Recieve a state to rerun the post request when a user clicks on try Again */}
          <CompanyModalUpdates
            status={'loading'}
            setState={setShow}
          />
        </ReactPortal>
      )}
    </>
  );
};
export default CompanyProfileForm;
