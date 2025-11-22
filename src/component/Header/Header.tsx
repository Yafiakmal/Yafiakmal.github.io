import Button from "../Button/Button";

export default function Header() {
    return (
        <header className="px-4 h-[70px] w-full bg-blue-200 flex justify-between items-center">

            {/* Logo */}
            <div className="w-[20%] flex justify-center items-center">
                <h1 className="text-xl font-bold">MYA</h1>
            </div>

            {/* Right Links */}
            <nav className="px-2 flex items-center gap-3 w-full justify-end">
                <Button href="#" variant="luxury">
                    Blog
                </Button>
            </nav>

        </header>
    );
}
