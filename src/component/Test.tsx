import { useEffect, useState } from "react";

export default function Test() {
    const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl'>('2xl');

    useEffect(() => {
        const mediaQuerySm = window.matchMedia('(max-width: 640px)');
        const mediaQueryMd = window.matchMedia('(max-width: 768px)');
        const mediaQueryLg = window.matchMedia('(max-width: 1024px)');
        const mediaQueryXl = window.matchMedia('(max-width: 1280px)');

        const updateScreenSize = () => {
            if (mediaQuerySm.matches) setScreenSize('sm');
            else if (mediaQueryMd.matches) setScreenSize('md');
            else if (mediaQueryLg.matches) setScreenSize('lg');
            else if (mediaQueryXl.matches) setScreenSize('xl');
            else setScreenSize('2xl');
        };

        updateScreenSize();

        mediaQuerySm.addEventListener('change', updateScreenSize);
        mediaQueryMd.addEventListener('change', updateScreenSize);
        mediaQueryLg.addEventListener('change', updateScreenSize);
        mediaQueryXl.addEventListener('change', updateScreenSize);

        return () => {
            mediaQuerySm.removeEventListener('change', updateScreenSize);
            mediaQueryMd.removeEventListener('change', updateScreenSize);
            mediaQueryLg.removeEventListener('change', updateScreenSize);
            mediaQueryXl.removeEventListener('change', updateScreenSize);
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-70px w-full">
            {/* Below sm: nothing */}
            {/* Above sm & below md: only child 1 */}
            {screenSize !== 'sm' && (
                <>
                    <div>more than Small</div>
                    {/* Above md & below lg: both children */}
                    {(screenSize === 'md') && <div> more than Medium</div>}
                    {(screenSize === 'lg') && <div> more than Lagre</div>}
                    {(screenSize === 'xl') && <div> more than Extra Lagre</div>}
                    {(screenSize === '2xl') && <div> more than 2 Extra Lagre</div>}
                </>
            )}
        </div>
    );
}