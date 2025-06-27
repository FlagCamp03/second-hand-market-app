import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://pic1.arkoo.com/56D0B40F99F841DF8A2425762AE2565D/picture/o_1i4qop009177v1tgf14db15he1iaj1is.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://ww2.sinaimg.cn/mw690/61d7678dgy1hvt194v9kqj20p00uuape.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
