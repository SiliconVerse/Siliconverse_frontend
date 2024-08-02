import PasswordUpdate from "../PasswordUpdate";

function CompanySettings() {
  return (
    <section>
      <div>
        <h3 className="text-lg md:text-xl font-bold">Account Settings</h3>
        <p>
          Updating your information will offer you the most relevant content and
          conversations
        </p>
      </div>
      {/* Update Password */}
      <PasswordUpdate />
    </section>
  );
}
export default CompanySettings;
