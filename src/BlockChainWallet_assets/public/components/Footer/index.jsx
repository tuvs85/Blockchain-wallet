import React from 'react';
import './index.css'

export default function Footer(){


    return (
        <div className="provided">
            <p>
                Powered by <DfinityLogo />
            </p>
            <p className="contact">
                <a href="mailto:noshufu@gmail.com" target="_blank">
                    Contact Me noshufu@gmail.com
                </a>
            </p>
        </div>
    )
}

export function DfinityLogo(){
    return (
        <a aria-current="page" className="provided-logo" href="https://dfinity.org/" target="_blank" one-link-mark="yes">
            <img src="data:image/png;base64,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"  alt="dfinity"/>
            <h1 className="dfinity">DFINITY</h1>
        </a>
    )
}
