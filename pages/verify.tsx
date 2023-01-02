// import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import Home1 from ".";
import { NavigateFunction } from "react-router";

  
// const router = useRouter();
// const [session, setSession] = useRecoilState(recoilSessionState);
// const { next: next } = router.query;
export default function Component() {
  console.log("yes22")
    const router = useRouter();
    const [session, setSession] = useRecoilState(recoilSessionState);
    console.log(session)
    if (session){
      router.push(`/${session?.user.rollno}_${session?.user.email}_${session?.user.id}`)
    }
    // setSession(session)
    const { next: next } = router.query;
    console.log(router.push)
  return (
    <div>
      <Redirect
        loginUrl={`${process.env.NEXT_PUBLIC_LOGIN_URL}`}
        historyPush={router.push}
        sessionState={session}
        setSessionState={setSession}
        basePath={`${process.env.NEXT_PUBLIC_BASE_URL}`}
        path={`/${session?.user.rollno}_${session?.user.email}_${session?.user.id}`}
        ory={ory}
        xenon={xenon} roles={[]}/>
    </div>
  );
}