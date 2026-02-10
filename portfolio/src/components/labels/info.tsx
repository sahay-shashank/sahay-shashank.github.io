import type React from "react";

export default function Info({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-blue-500 bg-blue-50 p-4 border-l-4 mt-5">
            {children}
        </div>
    )
}