import { useState } from 'react';

export default function MagazineAdminProfileEditForm({ user }) {
  const [userDetails] = useState({
    ...user,
    otherNames: '',
    email: '',
    phoneNumber: '',
    location: '',
    gender: '',
    bio: '',
    dob: '',
  });
  return <div>magazine-admin-profile-edit-form</div>;
}
