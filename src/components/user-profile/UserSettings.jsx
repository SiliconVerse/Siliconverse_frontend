import ResetPassword from "../company-profile/ResetPassword";

function UserSettings() {
  return (
    <section>
      <div>
        <h3 className="text-lg md:text-xl font-bold">Account Settings</h3>
        <p>Updating your information will offer you the most relevant content and conversations</p>
      </div>
      {/* Update Password */}
      <ResetPassword />
    </section>
  );
}
export default UserSettings;
