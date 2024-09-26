import PropTypes from 'prop-types'
function User({ name, surname, isLoggedIn, friends }) {
  if(!isLoggedIn){
    return (
      <div>Giriş Yapmadınız</div>
    )
  }
  return (
    <>
    <h1>{`Merhaba ${name} ${surname}`}</h1>
    {
        friends.map(friend=> <div key={friend.id}>{friend.name}</div>)
    }
    </>
  );
}
User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array
}
User.defaultProps = {
  isLoggedIn: false,
  name: ""
}
export default User;
