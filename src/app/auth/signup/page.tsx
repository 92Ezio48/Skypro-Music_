'use client';

import styles from './signup.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { AxiosError } from 'axios';
import { registerUser } from '@/services/auth/authApi'; // Сделай аналогично authUser

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // <--- ИСПРАВЛЕНО!
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Базовые проверки
    if (
      !email.trim() ||
      !username.trim() ||
      !password.trim() ||
      !repeatPassword.trim()
    ) {
      return setErrorMessage('Заполните все поля');
    }
    if (password !== repeatPassword) {
      return setErrorMessage('Пароли не совпадают');
    }

    setIsLoading(true);

    // Вызов API регистрации
    registerUser({ email, username, password })
      .then((res) => {})
      .catch((error) => {
        if (error instanceof AxiosError && error.response) {
          setErrorMessage(error.response.data.message || 'Ошибка регистрации');
        } else if (error instanceof AxiosError && error.request) {
          setErrorMessage('Проблема с соединением');
        } else {
          setErrorMessage('Неизвестная ошибка');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Link href="/music/main">
        <div className={styles.modal__logo}>
          <img src="/img/logo_modal.png" alt="logo" />
        </div>
      </Link>
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
        onChange={onChangeEmail}
        value={email}
      />
      <input
        className={classNames(styles.modal__input, styles.login)}
        type="text"
        name="username"
        placeholder="Имя пользователя"
        onChange={onChangeUsername}
        value={username}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="password"
        placeholder="Пароль"
        onChange={onChangePassword}
        value={password}
      />
      <input
        className={styles.modal__input}
        type="password"
        name="repeatPassword"
        placeholder="Повторите пароль"
        onChange={onChangeRepeatPassword}
        value={repeatPassword}
      />
      <div className={styles.errorContainer}>{errorMessage}</div>
      <button
        disabled={isLoading}
        onClick={onSubmit}
        className={styles.modal__btnEnter}
      >
        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
      <Link href={'/auth/signin'} className={styles.modal__btnSignup}>
        Уже есть аккаунт? Войти
      </Link>
    </>
  );
}
