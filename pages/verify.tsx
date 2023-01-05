// import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { loginStatus } from "../components/recoilDeclarations";

// const context= useContext();
// const router = useRouter();
// const [session, setSession] = useRecoilState(recoilSessionState);
// const { next: next } = router.query;
export default function Component() {
  console.log("yes22")
    const router = useRouter();
    const [session, setSession] = useRecoilState(recoilSessionState);
    const [isLogIn, setIsLogIn] = useRecoilState(loginStatus)
    setIsLogIn(true)
    console.log(isLogIn)
    console.log(session?.user.id)
    if(session !== undefined) {
      setSession(session)
      router.push('/')
    }
    const { next: next } = router.query;
    console.log(router.push)
  return (
    <div>
      {
        ((session === undefined)) &&
      <Redirect
        loginUrl={`${process.env.NEXT_PUBLIC_LOGIN_URL}`}
        historyPush={router.push}
        sessionState={session}
        setSessionState={setSession}
        basePath={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        path="/loadingPage"
        ory={ory}
        xenon={xenon} roles={[]}      />
      }
      <script>
        {}
        {/* console.log(loginUrl); */}
      </script>
    </div>
  );
}