
import useAuth from "../../../../Hooks/useAuth";

import useUserRole from "../../../../Hooks/useUserRole";

const AgentProfile = () => {    
    const { user } = useAuth();
    const [allUser] = useUserRole()
  return (
    <div className="flex flex-col  md:flex-row gap-5">
      <div className="md:w-1/3 bg-slate-600 text-white p-5 space-y-5">
        <img className="rounded-badge w-20 h-20" src={user.photoURL} alt="" />
        <h1 className="
        uppercase">{user.displayName}</h1>
        <h1 className="uppercase">Role: {allUser?.role}</h1>
      </div>

      <div className="md:w-2/3 border"></div>
    </div>
  );
};

export default AgentProfile;