function Login() {
    return React.createElement('div', null,
      React.createElement('h2', null, 'Login'),
      React.createElement('form', null,
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'username' }, 'Username:'),
          React.createElement('input', { type: 'text', id: 'username', name: 'username' })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'password' }, 'Password:'),
          React.createElement('input', { type: 'password', id: 'password', name: 'password' })
        ),
        React.createElement('button', { type: 'submit' }, 'Submit')
      )
    );
  }
  