import type React from "react";

export default function Warning({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-yellow-500 bg-yellow-50 p-4 border-l-4 mt-5">
            {children}
        </div>
    )
}