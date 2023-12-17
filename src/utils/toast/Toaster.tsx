"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, CloseCircle } from "@/assets";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const variants = {
  init: { y: "-100%", scale: 0 },
  open: { y: 0, scale: 1 },
  closed: { y: "-100%", scale: 0 },
}

const Toaster = () => {
  const data = useSelector((state: RootState) => state.toast);

  return (
    <motion.nav className="fixed w-full top-5 flex flex-col-reverse items-center gap-3 pointer-events-none" layout layoutRoot>
      {
        data.map((value) => (
          <motion.div
            className={`bg-[rgba(255,255,255,0.64)] px-6 py-[18px] shadow-[0px_4px_12px_8px_rgba(0,0,0,0.12)] rounded-2xl backdrop-blur-md flex gap-2 pointer-events-auto origin-[top_center]`}
            initial={"init"}
            layout={value.isVisible}
            animate={value.isVisible ? "open" : "closed"}
            variants={variants}
            transition={value.isVisible ? {
              type: "spring",
              stiffness: 260,
              damping: 20
            }: {}}
            key={value.id}
          >
            {
              value.type === "loading" ?
                <div className="w-5 h-5 border-2 border-gray100 border-t-gray900 rounded-full animate-spin" />
                :
                value.type === "error" ?
                  <CloseCircle size={20} className="text-red500" />
                  :
                  <CheckCircle isFill size={20} className="text-blue500" />
            }
            <span className="text-bodyMedium text-black">{value.message}</span>
          </motion.div>
        ))
      }
    </motion.nav>
  )
}

export default Toaster;