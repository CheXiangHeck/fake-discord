import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { AvatarImage } from "../ui/avatar";

type FriendChannelProps = {
  username: string;
  imageURL?: string;
  className?: string;
};

export const FriendChannel = ({
  username,
  imageURL,
  className,
}: FriendChannelProps) => {
  return (
    <Button className={`${className}`} variant="default">
      <Avatar>
        <AvatarImage src={imageURL} />
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
      {username}
    </Button>
  );
};
