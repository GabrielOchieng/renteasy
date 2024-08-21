import { useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { format } from "timeago.js";

const Message = ({ message, own, currentChat, markMessageAsRead }) => {
  // useEffect(() => {
  //   if (
  //     message.read === false &&
  //     currentChat &&
  //     currentChat._id === message.conversationId
  //   ) {
  //     // Mark message as read if it's unread and in the current chat
  //     markMessageAsRead(message._id);
  //     console.log("read message", message.text);
  //   }
  // }, [message, currentChat]);

  useEffect(() => {
    if (
      message.read === false &&
      currentChat &&
      currentChat._id === message.conversationId &&
      !own // Check if message sender is not the current user
    ) {
      // Mark message as read if it's unread, in the current chat, and not sent by the user
      markMessageAsRead(message._id);
      console.log("read message", message.text);
    }
  }, [message, currentChat, own, markMessageAsRead]); // Include own in the dependency array

  return (
    <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
      <div className="flex">
        {!own && (
          <IoPersonCircleSharp className="messageImg w-8 h-8 rounded-full mr-2" />
        )}
        <p
          className={`messageText px-4 py-2 rounded-lg max-w-md ${
            own ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"
          }`}
        >
          {message.text}
        </p>
      </div>
      <div className="messageBottom text-sm mt-2">
        {format(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
