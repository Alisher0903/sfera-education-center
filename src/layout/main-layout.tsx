"use client"

import React, {ReactNode} from "react";
import {ProgressProvider} from "@bprogress/next/app";
import '@/lib/i18n'

const MainLayout = ({children}: { children: ReactNode }) => {
    return <>
        <ProgressProvider
            height="3px"
            color='#5c66e8'
            options={{showSpinner: false}}
            shallowRouting
        >
            {children}
        </ProgressProvider>
    </>
};

export default MainLayout;