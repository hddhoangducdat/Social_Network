import React from "react"; // {useEffect }

import { connect } from "react-redux";
import { getNotiLike } from "../../actions/Notification/NotiLike";

import DialogNoti from "../Status/DialogNoti";

const FriendLike = ({ notiLike, userId, getNotiLike, status, user }) => {
  React.useEffect(() => {
    getNotiLike(userId);
  }, [notiLike.length, getNotiLike, userId]);

  const handleLike = () => {
    return (
      <div>
        {status.map((feed, key) => {
          const noti = notiLike.filter(like => {
            return like.statusId === feed.id;
          });
          if (noti.length === 0) return <div key={key}></div>;
          const text =
            noti.length > 1
              ? `${noti[noti.length - 1].text} and ${noti.length -
                  1} others like your status`
              : noti[0].text;
          const isLike = noti
            .map(n => {
              return n.sender === userId;
            })
            .includes(true);
          const numLike = noti.length;
          return (
            <div key={key}>
              <DialogNoti
                text={text}
                userId={userId}
                user={user}
                feed={feed}
                noti={noti}
                isLike={isLike}
                numLike={numLike}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{handleLike()}</div>;
};

const mapStateToProps = state => {
  // const status = Object.values(state.status)
  return {
    notiLike: Object.values(state.notiLike),
    userId: state.user.id,
    user: state.user,
    status: Object.values(state.status)
  };
};

export default connect(
  // mapStateToProps,
  // { getNotiLike, ClickLike, UnClickLike, createNotiLike, deleteNotiLike }
  mapStateToProps,
  {
    getNotiLike
  }
)(FriendLike);
