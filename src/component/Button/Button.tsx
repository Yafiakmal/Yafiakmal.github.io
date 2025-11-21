interface ButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    className?: string;
}

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base =
        "inline-block px-4 py-2 md:px-6 md:py-3 text-[0.7rem] 2xl:text-base font-medium rounded-xl transition duration-200";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-neutral-800 text-white hover:bg-neutral-900",
        outline:
            "border border-neutral-600 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-800",
        ghost:
            "text-neutral-800 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700",
    };

    return (
        <a href={href} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </a>
    );
}

