export const FriendItem = user => {
  return (
    <li className="item">
      <span className="status">{user.status === true ? 'true' : 'false'}</span>
      <img
        className="avatar"
        src={user.avatarUrl}
        alt="User avatar"
        width="48"
      />
      <p className="name">{user.name}</p>
    </li>
  );
};
