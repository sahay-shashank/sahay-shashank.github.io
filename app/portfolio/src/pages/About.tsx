export default function About() {
    return (
        <>
            <div>
                {Array.from({ length: 50 }).map((_, i) => (
                    <br key={i} />
                ))}
                This is the about section
            </div>
        </>
    )
}