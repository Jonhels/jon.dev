import React from 'react';
import './Tools.css';
import Typescript from './icons/Typescript.svg';
import Javascript from './icons/Javascript.svg';
import Vscode from './icons/Visualstudio.svg';
import Reactsvg from './icons/React.svg';
import Framer from './icons/FramerMotion.svg';
import Figma from './icons/Figma.svg';
import Bash from './icons/Bash.svg';

function Tools() {
    return (
        <div className="Tools">
            <h2>My tools</h2>
            <ul>
                <li>
                    <a href="">
                        <img src={Typescript} alt="Typescript" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Javascript} alt="Javascript" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Vscode} alt="Visual studio code" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Reactsvg} alt="Create react app" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Framer} alt="Framer motion" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Figma} alt="Figma" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={Bash} alt="Bash" />
                    </a>
                </li>
            </ul>
            <h2>
                Typescript
            </h2>
            <img src={Typescript} alt="Typescript" />
            <p>Typescript provides all the functionalities of javascript with some added features.
                I prefer to use typescript in my react projects. Typescript is an object-oriented programming language.
            </p>
        </div>
    );
}

export default Tools;
