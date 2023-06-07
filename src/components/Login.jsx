import React from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../queries';

const Login = ({ setError, setToken }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [login, result] = useMutation(
    LOGIN,
    {
      onError: (error) => {
        setError(error.graphQLErrors[0].message);
      }
    }
  );

  React.useEffect(() => {
    if (result.data) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem('token', token);
    }
  }, [result.data]);

  const submit = async (event) => {
    event.preventDefault();
    login({ variables: { username, password } });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;