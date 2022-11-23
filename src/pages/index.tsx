import { Modal } from "@mantine/core";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { WalletConnect } from "../component/WalletConnect";
import { useMintNFT } from "../hook/MintNFT";
import { onAuthStateChanged, User } from 'firebase/auth';
import { firebaseAuth } from "../Firebase/firebase";

export default function Home() {
  const { send } = useMintNFT();
  
  const [user, setUser] = useState<User | null>();

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const [score, setScore] = useState<number>(0);
  const {
    unityProvider,
    isLoaded,
    addEventListener,
    removeEventListener,
    sendMessage,
  } = useUnityContext({
    loaderUrl: "/Build/kyutechHack.loader.js",
    dataUrl: "/Build/kyutechHack.data",
    frameworkUrl: "/Build/kyutechHack.framework.js",
    codeUrl: "/Build/kyutechHack.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });
  const [devicePixelRatio, setDevicePixelRatio] = useState(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDevicePixelRatio(window.devicePixelRatio);
    }
  }, []);
  const handleSubmit = async () => {
    await send("3rd", "10,000", "2022/11/21");
  };
  const handleColor = (rgb: string) => {
    sendMessage("Color", "ChangeColor", rgb);
  };

  const handleGameOver = useCallback((score: number) => {
    setScore(score);
    setOpen(true);
  }, []);
  useEffect(() => {
    addEventListener("Score", handleGameOver);
    return () => {
      removeEventListener("Score", handleGameOver);
    };
  }, [handleGameOver, addEventListener, removeEventListener]);
  return (
    <div>
      <Head>
        <title>Many drops make a shower</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full shadow-sm shadow-black/30">
        <div className="max-w-6xl mx-auto h-[70px] px-5 flex justify-between items-center">
          <h1 className="text-transparent font-extrabold text-2xl bg-clip-text bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
            Many drops make a shower
          </h1>
          <button onClick={() => handleColor("#000000")}>Color</button>
          <WalletConnect />
          <div>{user? user.displayName : ""}</div>
        </div>
      </header>
      <main className="w-full relative">
        {isLoaded === false && (
          <div className="h-[calc(100vh-70px)] w-full relative bg-black">
            <div className="spinner-box">
              <div className="blue-orbit leo"></div>

              <div className="green-orbit leo"></div>

              <div className="red-orbit leo"></div>

              <div className="white-orbit w1 leo"></div>
              <div className="white-orbit w2 leo"></div>
              <div className="white-orbit w3 leo"></div>
            </div>
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{
            height: "calc(100vh - 70px)",
            width: "100%",
          }}
          devicePixelRatio={devicePixelRatio}
        />
        <Modal
          opened={open}
          onClose={() => setOpen(false)}
          title="Introduce yourself!"
        >
          <p className="text-3xl font-bold text-center ">{score}</p>
        </Modal>
        <button
          className="w-20 h-20 rounded-full bg-black absolute right-4 bottom-4"
          onClick={() => setOpen(true)}
        >
          色変更
        </button>
      </main>
    </div>
  );
}
