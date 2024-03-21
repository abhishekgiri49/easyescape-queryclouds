import { useUserDashboardContext } from "../pages/layouts/UserDashboardLayout";
const UserDashboard = () => {
  const { user, logoutUser } = useUserDashboardContext();
  return (
    <div className="tab-pane fade   show active" id="dashboad" role="tabpanel">
      <div className="myaccount-content">
        <h3>Dashboard</h3>
        <div className="welcome">
          <p>
            Hello,{" "}
            <strong>
              {user.firstName} {user.lastName}
            </strong>{" "}
            (If Not <strong>{user.firstName} !</strong>
            <a onClick={logoutUser} className="logout">
              {" "}
              Logout
            </a>
            )
          </p>
        </div>
        <p className="mb-0">
          From your account dashboard. you can easily check & view your recent
          trip bookings and edit your password and account details.
        </p>
      </div>
    </div>
  );
};
export default UserDashboard;
