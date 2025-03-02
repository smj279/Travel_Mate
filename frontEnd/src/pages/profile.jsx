import "../allcss/profile.css";

const Profile = () => {
  const profileImageUrl = "https://www.jmfactors.com.my/wp-content/uploads/2024/04/dummy-avatar-1.jpg";

  return (
    <div className="profile-container">
      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-row">
          <div className="profile-image">
            <img src={profileImageUrl} alt="Profile" />
          </div>
          <div className="profile-info">
            <h5 className="profile-name">John Doe</h5>
            <p className="profile-email">✉️ johndoe@example.com</p>
            <p className="profile-phone">📞 +123 456 7890</p>
            <p className="profile-address">📍 New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
