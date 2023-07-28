"use client"

import React from 'react'
import { signIn, useSession } from "next-auth/react"
import styles from "./page.module.css"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {

  const session = useSession();
  const router = useRouter();

  if(session.status === "loading"){
    return <p>Loading</p>;
}

if(session.status === "authenticated"){
    router?.push("/dashboard");
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password })
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <span>--OR--</span>
      <button onClick={() => signIn("google")} className={styles.button}>Login with Google</button>
      <span>No account?
      <Link href={'/dashboard/register'}> Click Here</Link>
      </span>
    </div>
  )
}

export default Login