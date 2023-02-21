import Image from 'next/image';
import React from 'react';

export default function Header() {
    return <div>

        {/* Header */}
        <div className="flex items-center justify-between max-w-6xl">
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                    layout='fill'
                    className="object-contain"
                />
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                    layout='fill'
                    className="object-contain"
                />
            </div>
            <h1>Right side</h1>
        </div>
    </div>
}