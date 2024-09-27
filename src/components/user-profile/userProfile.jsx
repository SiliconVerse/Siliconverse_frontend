import { useAuth } from '../../hooks/userAuth';
import UploadResumeInput from '../upload-resume-input';
import UserData from '../user-data';

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <section className='space-y-6'>
      <UserData user={user} />
      <div className='boxShadow rounded-sl py-4 px-3 md:px-7 md:pt-5 md:pb-2 border max-w-screen-lg'>
        <h2 className='font-bold text-xl md:text-2xl'>Resume</h2>
        <p>
          After you upload a resume, it will be used to pre-fill internship
          applications that you submit via Easy Apply.
        </p>

        <UploadResumeInput userId={user.uid} />
      </div>
    </section>
  );
};
export default UserProfile;
