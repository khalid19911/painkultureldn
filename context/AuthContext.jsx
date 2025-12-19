import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../src/supabaseClient";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  //Sign Up
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("There was a problem signing up:", error.message);
      return { success: false, error };
    }
    return { success: true, data };
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  //Sign In
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.error("There was a problem signing in:", error.message);
        return { success: false, error: error.message };
      }
      console.log("Sign-in successful:", data);
      return { success: true, data };
    } catch (error) {
      console.error("There was a problem signing in:", error.message);
    }
  };

  //Sign Out

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
