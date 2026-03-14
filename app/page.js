"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Home(){

  const router = useRouter();

  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null);

  useEffect(()=>{

    const checkUser = async () => {

      const { data } = await supabase.auth.getUser();

      setUser(data.user);
      setLoading(false);

      if(!data.user){
        router.push("/login");
      }

    };

    checkUser();

    const { data: listener } =
      supabase.auth.onAuthStateChange((event,session)=>{

        if(!session){
          router.push("/login");
        }else{
          setUser(session.user);
        }

      });

    return ()=>{
      listener.subscription.unsubscribe();
    };

  },[]);


  if(loading){
    return(
      <div className="loginScreen">
        <div className="glass loginCard">
          Завантаження...
        </div>
      </div>
    );
  }


  return(

    <div className="app">

      <div className="glass profileCard">

        <div className="avatar"></div>

        <h2>BUTBIT</h2>

        <p>{user?.email}</p>

      </div>

    </div>

  );

    }
