import userData from '../userData.json';
import { Profile } from './Profile/Profile';
import friends from '../friends.json';
import { FriendList } from './Friends/Friendslist';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
