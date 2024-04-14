/* eslint-disable react/prop-types */
import { BarChart, FileText } from 'lucide-react';
import styles from './companyModal.module.css';

const CompanyModalUpdates = ({ status }) => {
  return (
    <div className={styles.container}>
      {status == 'loading' && (
        <div>
          <FileText size={240} />
          <p style={{ fontWeight: '700' }}>Uploading Post, please wait...</p>
        </div>
      )}

      {status == 'success' && (
        <div>
          <FileText size={240} style={{ color: 'var(--green)' }} />
          <p
            style={{
              color: 'var(--primary-color)',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            Uploaded Successfully
          </p>
          <p style={{ fontWeight: '500' }}>
            Your post has been successfully updated.
          </p>
        </div>
      )}

      {status == 'error' && (
        <div>
          <BarChart size={240} style={{ color: 'var(--red)' }} />
          <p
            style={{
              color: 'var(--red)',
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            Couldn’t upload magazine post
          </p>
          <p style={{ fontWeight: '700' }}>Check your internet connection</p>
        </div>
      )}
    </div>
  );
};
export default CompanyModalUpdates;
