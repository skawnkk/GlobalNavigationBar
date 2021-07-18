import styled from 'styled-components';

function Profile() {
  return (
    <ProfileBlock>
      <img src={process.env.PUBLIC_URL + '/userProfile.jpg'} alt='profile' height='50' />
    </ProfileBlock>
  );
}

const ProfileBlock = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;
export default Profile;
