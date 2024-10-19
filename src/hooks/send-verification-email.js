import { toast } from 'react-toastify';

export default function useSendVerificationEmail() {
  async function sendEmailVerification(user) {
    const url =
      'https://siliconverse-email-server.vercel.app/api/send-verification';

    const email = user.email;
    const name = user?.displayName || 'there';

    const res = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ email, name }),
    });
    const data = await res.json();
    if (!res.ok) {
      toast.error(data.message);
      return;
    }
    toast.info('Please check your mail for verification');
  }

  return { sendEmailVerification };
}
