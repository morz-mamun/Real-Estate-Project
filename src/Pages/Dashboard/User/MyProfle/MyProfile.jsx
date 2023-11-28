import useAuth from "../../../../Hooks/useAuth";


const MyProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-1/3 bg-slate-600 text-white p-5 space-y-5">
        <img className="rounded-badge w-20 h-20" src={user.photoURL} alt="" />
        <h1>{user.displayName}</h1>
        <h1>Role: User</h1>
      </div>

      <div className="w-2/3 border"></div>
    </div>
  );
};

export default MyProfile;
