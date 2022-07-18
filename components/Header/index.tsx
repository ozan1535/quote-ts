import Link from "next/link";
import classes from "./index.module.css";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const session = useSession();
  return (
    <div className={`${classes.container} ${classes.align}`}>
      <div className={classes.align}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        {!session.data && (
          <div>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        )}
        {session.data && (
          <>
            <div>
              <Link href="/messages">
                <a>Messages</a>
              </Link>
            </div>
            <div>
              <Link href="/add">
                <a>Add Quote</a>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={classes.align}>
        {!session.data && (
          <div>
            <Link href="/auth">
              <a>Login</a>
            </Link>
          </div>
        )}
        {session?.data && (
          <div>
            <button
              onClick={() =>
                signOut({
                  redirect: false,
                })
              }
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
