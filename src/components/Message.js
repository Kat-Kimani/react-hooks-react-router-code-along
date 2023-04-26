import React from "react";

function Message() {
  return (
    <div>
      <h1>Message</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="message..." />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Message;
