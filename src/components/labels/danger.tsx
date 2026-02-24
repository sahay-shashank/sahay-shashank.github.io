import type React from "react";

export default function Danger({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-red-500 bg-red-50 p-4 border-l-4 mt-5">
            {children}
        </div>
    )
}