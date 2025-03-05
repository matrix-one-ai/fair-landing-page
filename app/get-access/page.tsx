"use client";

import {
  usePrivy,
  useLogin,
  useLinkAccount,
  PrivyErrorCode,
  User,
  LinkedAccountWithMetadata,
} from "@privy-io/react-auth";
import FAQ from "@/app/components/FAQ";
import { useCallback, useEffect, useState } from "react";
import { generateInvitationCodes } from "../utils/generateInviteCodes";
import { TFairUser } from "@/app/types";
import { useToggle } from "@/app/hooks/useToggle";

export default function Page() {
  const { ready, authenticated, user } = usePrivy();
  const [
    showInvitationCodesModal,
    {
      toggleOn: toggleOnShowInvitationCodesModal,
      toggleOff: toggleOffShowInvitationCodesModal,
    },
  ] = useToggle(false);
  const [
    showVerifiedXModal,
    {
      toggleOn: toggleOnShowVerifiedXModal,
      toggleOff: toggleOffShowVerifiedXModal,
    },
  ] = useToggle(false);
  const [fairUser, setFairUser] = useState<TFairUser | null>(null);

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
    const newFairUser = await createUser();

    if (newFairUser) {
      const currentAction = localStorage.getItem("currentAction");

      if (currentAction === "invite_code") {
        toggleOnShowInvitationCodesModal();
      } else if (currentAction === "verify_x") {
        toggleOnShowVerifiedXModal();
      }

      localStorage.setItem("currentAction", "");
    }
  }, [
    createUser,
    toggleOnShowInvitationCodesModal,
    toggleOnShowVerifiedXModal,
  ]);

  // Callback for privy link account failed
  const onLinkAccountFailed = useCallback((error: PrivyErrorCode) => {
    console.warn("Linking account failed: ", error);
    localStorage.setItem("currentAction", "");
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

      const currentAction = localStorage.getItem("currentAction");

      if (!currentAction) return;

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
    localStorage.setItem("currentAction", "");
  }, []);

  const { login } = useLogin({
    onComplete: onLoginComplete,
    onError: onLoginFailed,
  });

  // Handle invite code button click
  const handleInviteCodeButtonClick = useCallback(() => {
    localStorage.setItem("currentAction", "invite_code");

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
    localStorage.setItem("currentAction", "verify_x");

    if (user === null) {
      login();
    } else {
      const { twitter, wallet } = user;

      if (!twitter) {
        linkTwitter();
      } else if (!wallet) {
        linkWallet();
      } else if (fairUser) {
        toggleOnShowVerifiedXModal();
      }
    }
  }, [
    fairUser,
    linkTwitter,
    linkWallet,
    login,
    toggleOnShowVerifiedXModal,
    user,
  ]);

  return (
    <div className="flex w-full flex-col text-black items-center">
      <div className="flex justify-center w-full bg-gradient-to-b from-gray_secondary to-gray">
        <div className="w-full max-w-[1400px] flex flex-col px-7 justify-between pt-16 pb-12 gap-16 lg:pt-32 lg:pb-24 lg:gap-32">
          <div className="flex flex-col gap-6 items-center flex-1">
            <span className="text-center font-bold text-5xl uppercase">
              Get Access to fair
            </span>
            <span className="text-center uppercase">
              Join us in automating any crypto project with a team of ai agents
            </span>
          </div>
          <div className="gap-4 flex flex-col lg:grid lg:grid-cols-3">
            <div className="bg-black rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
              <div className="">
                <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                  CREATE A TEAM
                </p>
                <p className="mb-8 text-gray uppercase">
                  GET ACCESS TO OUR FRAMEWORK SO YOU CAN LAUNCH OR AUTOMATE ANY
                  CRYPTO PROJECT WITH A TEAM OF AI AGENTS. OUR TEAM WORKS WITH
                  YOU HANDS ON TO AUTOMATE YOUR CRYPTO PROJECT. APPLICANTS WITH
                  AN ACCESS CODE ARE PRIORITIZED.
                </p>
              </div>
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white">
                BOOK A CALL
              </button>
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
                GET INVITE CODES
              </button>
            </div>
            <div className="bg-mint_brand rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
              <div className="">
                <p className="mb-3 font-bold text-4xl text-black uppercase">
                  EARN $FAIR FOR MARKETING
                </p>
                <p className="mb-8 text-black uppercase">
                  MENTION @fAIRDOTTOKEN ON X AND DRIVE MINDSHARE. OUR AI WILL
                  MEASURE YOUR POST AND YOU WILL RECEIVE $fAIR VIA THE TOKEN
                  UNLOCK. .
                </p>
              </div>
              <button
                className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white"
                onClick={handleVerifyXButtonClick}
                disabled={!ready}
              >
                VERIFY MY X
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
          <div className="flex flex-col p-4 gap-4 text-white bg-black border-black border rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {JSON.parse(fairUser.invite_codes).map((code: string) => (
              <button key={code} className="p-2 border-gray border rounded">
                {code}
              </button>
            ))}
          </div>
        </div>
      )}
      {showVerifiedXModal && fairUser && (
        <div className="fixed top-0 left-0 w-full h-full">
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-100"
            onClick={toggleOffShowVerifiedXModal}
          />
          <div className="flex flex-col p-4 gap-4 text-white bg-black border-black border rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            You have been verified on X
          </div>
        </div>
      )}
    </div>
  );
}
