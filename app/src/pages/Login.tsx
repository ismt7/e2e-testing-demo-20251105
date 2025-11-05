import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'pass') {
      navigate('/dashboard')
    } else {
      setError('認証に失敗しました')
    }
  }

  return (
    <div className="page login-page">
      <form onSubmit={handleSubmit} className="card">
        <h1>ログイン</h1>
        <div className="demo-creds" aria-hidden="true">
          <strong>デモ用認証情報</strong>
          <div>ユーザー名: <code>admin</code></div>
          <div>パスワード: <code>pass</code></div>
        </div>
        <label>
          ユーザー名
          <input aria-label="username" value={username} onChange={(e) => setUsername((e.target as HTMLInputElement).value)} />
        </label>
        <label>
          パスワード
          <input aria-label="password" type="password" value={password} onChange={(e) => setPassword((e.target as HTMLInputElement).value)} />
        </label>
        {error && <div className="error" role="alert">{error}</div>}
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
