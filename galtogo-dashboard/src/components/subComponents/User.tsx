// interface UserProps {
//   user: IUser;
// }

export default function User(props: { usersData: IUser }): JSX.Element {
  const { usersData } = props;

  return <div>User</div>;
}
