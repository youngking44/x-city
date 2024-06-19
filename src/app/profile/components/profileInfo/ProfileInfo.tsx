import Card from "@/components/card/Card";
import Avatar from "@/components/avatar/Avatar";
import Button from "@/components/button/Button";
import { listData } from "@/lib/dummydata";
import { AiFillMessage } from "react-icons/ai";

interface ProfileInfoProps {
  showMobileChat: boolean;
  setShowMobileChat: (val: boolean) => void;
}

const ProfileInfo = ({
  showMobileChat,
  setShowMobileChat,
}: ProfileInfoProps) => {
  const data = listData;

  return (
    <div
      className={`flex-[3] min-h-screen md:h-auto pt-[140px] md:pt-[160px] pr-5 pb-10 overflow-y-scroll
      flex flex-col gap-7 ${showMobileChat ? "hidden md:flex" : ""} `}
    >
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <h1 className="text-2xl md:text-3xl font-[300]">User Information</h1>
        <div className="flex-1 flex justify-between items-center gap-5">
          <Button type="primary">Update Profile</Button>
          <div
            className="md:hidden text-accent-500"
            onClick={() => setShowMobileChat(true)}
          >
            <AiFillMessage size={40} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span className="flex items-center gap-5">
          Avatar: <Avatar />
        </span>
        <span className="flex items-center gap-5">
          Username: <b>Mike King</b>
        </span>
        <span className="flex items-center gap-5">
          E-mail: <b>mike@gmail.com</b>
        </span>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h1 className="text-2xl md:text-3xl font-[300]">My List</h1>
        <Button type="primary">Add New Post</Button>
      </div>
      <div className="flex flex-col gap-10 md:gap-5">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
