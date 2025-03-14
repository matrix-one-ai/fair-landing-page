"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  usePrivy,
  useLogin,
  useLinkAccount,
  PrivyErrorCode,
  User,
  LinkedAccountWithMetadata,
} from "@privy-io/react-auth";
import copy from "clipboard-copy";
import clsx from "clsx";
import FAQ from "@/app/components/FAQ";
import { generateInvitationCodes } from "@/app/utils/generateInviteCodes";
import { TFairUser } from "@/app/types";
import { useToggle } from "@/app/hooks/useToggle";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Page() {
  const { ready, authenticated, user } = usePrivy();
  const [
    showInvitationCodesModal,
    {
      toggleOn: toggleOnShowInvitationCodesModal,
      toggleOff: toggleOffShowInvitationCodesModal,
    },
  ] = useToggle(false);
  const [fairUser, setFairUser] = useState<TFairUser | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Create user
  const getUser = useCallback(async () => {
    try {
      if (!authenticated || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/supabase/getUser?twitter_handle=@${user.twitter?.username}&wallet_address=${user.wallet?.address}`,
      );
      const { error, user: fairUser } = await response.json();

      if (error) {
        throw new Error(error);
      }

      if (fairUser) {
        setFairUser(fairUser);

        return fairUser;
      } else {
        setFairUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [authenticated, user]);

  // Get user
  const createUser = useCallback(async () => {
    try {
      if (!authenticated || !user) {
        console.warn("User not authenticated.");
        return;
      }

      if (fairUser) {
        console.warn("User already exists.");
        return;
      }

      const existingUser = await getUser();

      if (existingUser) {
        console.warn("User already exists.");
        return;
      }

      const { wallet, twitter } = user;

      if (!wallet || !twitter) {
        throw new Error("Wallet and Twitter are required.");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/supabase/createUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            twitter_handle: `@${twitter.username}`,
            wallet_address: wallet.address,
            invite_codes: generateInvitationCodes(),
          }),
        },
      );
      const { error, user: newUser } = await response.json();

      if (error) {
        throw new Error(error);
      }

      if (newUser) {
        setFairUser(newUser);

        return newUser;
      } else {
        setFairUser(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [authenticated, fairUser, getUser, user]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  // Callback for privy link account success
  const onLinkAccountSuccess = useCallback(async () => {
    await createUser();
  }, [createUser]);

  // Callback for privy link account failed
  const onLinkAccountFailed = useCallback((error: PrivyErrorCode) => {
    console.warn("Linking account failed: ", error);
  }, []);

  const { linkTwitter, linkWallet } = useLinkAccount({
    onSuccess: onLinkAccountSuccess,
    onError: onLinkAccountFailed,
  });

  // Callback for privy login success
  const onLoginComplete = useCallback(
    ({
      user,
    }: {
      user: User;
      isNewUser: boolean;
      wasAlreadyAuthenticated: boolean;
      loginMethod: string | null; // TODO: Instead of string, LoginMethod should be used, but that type is not exported from privy lib
      loginAccount: LinkedAccountWithMetadata | null;
    }) => {
      const { wallet, twitter } = user;

      // After login with only X, then refresh the page. Without below timeout delay, the page will be crashed with privy ready status. Privy Bug.
      setTimeout(() => {
        // Link actions
        if (!wallet) {
          linkWallet();
        } else if (!twitter) {
          linkTwitter();
        }
      }, 100);
    },
    [linkTwitter, linkWallet],
  );

  // Callback for privy login failed
  const onLoginFailed = useCallback((error: PrivyErrorCode) => {
    console.error("Login failed: ", error);
  }, []);

  const { login } = useLogin({
    onComplete: onLoginComplete,
    onError: onLoginFailed,
  });

  // Handle invite code button click
  const handleInviteCodeButtonClick = useCallback(() => {
    if (user === null) {
      login();
    } else {
      const { twitter, wallet } = user;

      if (!twitter) {
        linkTwitter();
      } else if (!wallet) {
        linkWallet();
      } else if (fairUser) {
        toggleOnShowInvitationCodesModal();
      }
    }
  }, [
    fairUser,
    linkTwitter,
    linkWallet,
    login,
    toggleOnShowInvitationCodesModal,
    user,
  ]);

  // Handle verify X button click
  const handleVerifyXButtonClick = useCallback(() => {
    if (user === null) {
      login();
    } else {
      const { twitter, wallet } = user;

      if (!twitter) {
        linkTwitter();
      } else if (!wallet) {
        linkWallet();
      } else if (fairUser) {
        window.open("https://dune.com/fairtoken/fairtoken", "_blank");
      }
    }
  }, [fairUser, linkTwitter, linkWallet, login, user]);

  const handleCodeCopy = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const code = e.currentTarget.value;

      setCopiedCode(code);
      copy(
        `https://form.typeform.com/to/TtFYpp0H#twitter_handle=${fairUser?.twitter_handle}&invite_code=${code}`,
      );
    },
    [fairUser?.twitter_handle],
  );

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex w-full flex-col text-black items-center">
        <div className="flex justify-center w-full bg-gradient-to-b from-gray_secondary to-gray">
          <div className="w-full max-w-[1400px] flex flex-col px-7 justify-between pt-16 pb-12 gap-16 lg:pt-32 lg:pb-24 lg:gap-32">
            <div className="flex flex-col gap-6 items-center flex-1">
              <span className="text-center font-bold text-5xl uppercase">
                Get Access to fair
              </span>
              <span className="text-center uppercase">
                Join us in automating any crypto project with a team of ai
                agents
              </span>
            </div>
            <div className="gap-4 flex flex-col lg:grid lg:grid-cols-3">
              <div className="bg-black rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
                <div className="">
                  <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                    CREATE A TEAM
                  </p>
                  <p className="mb-8 text-gray uppercase">
                    GET ACCESS TO OUR FRAMEWORK SO YOU CAN LAUNCH OR AUTOMATE
                    ANY CRYPTO PROJECT WITH A TEAM OF AI AGENTS. OUR TEAM WORKS
                    WITH YOU HANDS ON TO AUTOMATE YOUR CRYPTO PROJECT.
                    APPLICANTS WITH AN ACCESS CODE ARE PRIORITIZED.
                  </p>
                </div>
                <Link
                  href="/get-access/book-call"
                  className="bg-orange_brand text-center rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white"
                >
                  BOOK A CALL
                </Link>
              </div>
              <div className="bg-transparent rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
                <div className="">
                  <p className="mb-3 font-bold text-4xl text-black uppercase">
                    EARN $FAIR FOR SALES
                  </p>
                  <p className="mb-8 text-black uppercase">
                    YOU WILL RECEIVE 5 INVITE CODES ONLY TO GIVE USERS FIRST
                    ACCESS TO THE FAIR PLATFORM. RECEIVE A SALES COMMISSION VIA
                    THE $FAIR TOKEN UNLOCK.
                  </p>
                </div>
                <button
                  className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white"
                  onClick={handleInviteCodeButtonClick}
                  disabled={!ready}
                >
                  {fairUser ? "VIEW YOUR INVITE CODES" : "GET INVITE CODES"}
                </button>
              </div>
              <div className="bg-mint_brand rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
                <div className="">
                  <p className="mb-3 font-bold text-4xl text-black uppercase">
                    EARN $FAIR FOR MARKETING
                  </p>
                  <p className="mb-8 text-black uppercase">
                    MENTION @MatrixOneAI ON X AND DRIVE MINDSHARE. OUR AI WILL
                    MEASURE YOUR POST AND YOU WILL RECEIVE $fAIR VIA THE TOKEN
                    UNLOCK. .
                  </p>
                </div>
                <button
                  className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white"
                  onClick={handleVerifyXButtonClick}
                  disabled={!ready}
                >
                  {fairUser ? "CHECK MY MARKETING" : "VERIFY MY X"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-7 flex justify-center w-full bg-gradient-to-b from-gray to-gray_secondary">
          <FAQ />
        </div>
        {/* Modals */}
        {showInvitationCodesModal && fairUser && (
          <div className="fixed top-0 left-0 w-full h-full">
            <div
              className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-100"
              onClick={toggleOffShowInvitationCodesModal}
            />
            <div className="w-4/5 max-w-[600px] bg-black rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-full">
                <p className="mb-1 font-bold text-2xl lg:text-4xl text-orange_brand uppercase">
                  YOUR UNIQUE INVITE CODES
                </p>
                <p className="mb-2 text-sm lg:text-base text-gray uppercase">
                  THESE ARE YOUR EXCLUSIVE CODES. CLICK TO COPY AND SHARE WITH
                  ANY OTHER PROJECTS SO THEY GET PRIORITIZED ACCESS TO FAIR. YOU
                  WILL RECEIVE $FAIR FOR ANY PROJECT THAT WORKS WITH US USING
                  THESE CODES. CLICK TO COPY THE CODE AND INVITE URL TO SHARE.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
                {JSON.parse(fairUser.invite_codes).map((code: string) => (
                  <button
                    key={code}
                    className={clsx(
                      "relative p-2 border-gray text-sm lg:text-base text-gray border rounded",
                      copiedCode === code && "!bg-gray !text-black",
                    )}
                    value={code}
                    onClick={handleCodeCopy}
                  >
                    {code}
                    {copiedCode === code && (
                      <span className="text-orange_brand text-2xl absolute top-1/2 right-4 -translate-y-1/2">
                        ✔
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
