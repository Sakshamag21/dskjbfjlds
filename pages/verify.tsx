// import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";

  // const context= useContext();
// const router = useRouter();
// const [session, setSession] = useRecoilState(recoilSessionState);
// const { next: next } = router.query;
export default function Component() {
  console.log("yes22")
    const router = useRouter();
    const [session, setSession] = useRecoilState(recoilSessionState);
    const { next: next } = router.query;
    console.log(router.push)
  return (
    <div>
      <Redirect
        loginUrl={`https://accounts.anciitk.in/login`}
        historyPush={router.push}
        sessionState={session}
        setSessionState={setSession}
        basePath={`http://localhost:3000`}
        // path={(next as string) || "dashboard"}
        path="/"
        ory={ory}
        xenon={xenon}
      />
      <script>
        consol.log("hsvdhjzvc");
        console.log(loginUrl);
        console.log(sessionState);
        console.log(basePath);
        console.log(path);
        console.log(historyPush);
        {/* console.log(loginUrl); */}
      </script>
    </div>
  );
}