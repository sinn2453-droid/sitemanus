"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Home(){

  const router = useRouter();

  useEffect(()=>{

    supabase.auth.getUser().then(({ data })=>{

      if(!data.user){
        router.push("/login");
      }

    });

  },[]);

  return(

    <div className="app">

      <div className="glass profileCard">

        <div className="avatar"></div>

        <h2>BUTBIT</h2>

        <p>BUTBIT</p>

      </div>

    </div>

  );

}

