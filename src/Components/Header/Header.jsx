import React, { useContext } from 'react'
import { Switch } from "@material-tailwind/react";
import header1 from "../../assets/images/headerImage.png";
import { ThemeBgContext } from "../ContextWrapeer/ThemeContext";


const Header = () => {
    const { theme, handleTheme } = useContext(ThemeBgContext);
    return (
        <div className='mx-auto pt-16'>
            <div className='sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center'>
                <div className='sm:w-full sm:pl-4 w-4/5 pl-24'>
                    <Switch label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
                        defaultChecked={theme === "dark" ? true : false}
                        onClick={handleTheme} />
                    <h1
                        className={
                            theme === "light"
                                ? "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                                : "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
                        }
                    >Brand new <span
                        className={
                            theme === "light"
                                ? "sm:text-4xl text-dark text-6xl font-petitFormal font-bold"
                                : "sm:text-4xl text-white text-6xl font-petitFormal font-bold"
                        }
                    >Javi Furnitures</span>{" "} Mobile App</h1>
                    <div className='mt-4'>
                        <p
                            className={
                                theme === "light"
                                    ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                                    : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
                            }
                        >
                            Transforming your living space has never been this effortless. Elevate your home with a touch of contemporary elegance through our exquisite furniture collection, all at affordable prices.</p>
                    </div>
                    <div className='pb-20'>
                        <button className='mt-4 pushable'>
                            <span className='front'>Start now</span>
                        </button>
                    </div>
                </div>
                <div className='mt-4'>
                    <div>
                    <h2
              className={
                theme === "light"
                  ? "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
              }
            >Innovative Design</h2>
                    </div>
                    <img
                        className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
                        src={header1}
                        alt="header-phone"
                    ></img>
                </div>

            </div>
        </div>
    )
}

export default Header