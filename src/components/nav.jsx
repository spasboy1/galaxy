import Logo from '../assets/logo.svg';
import { A } from "@solidjs/router";
import { IoOptions } from 'solid-icons/io';
import { IoGameController } from 'solid-icons/io';
import { SiDiscord } from 'solid-icons/si';
import { AiOutlineGithub } from 'solid-icons/ai';

function Nav() {
  function gamesGo() {
    window.navigate("https://radon.games/games") }
  function googleGo() {
    window.navigate("https://google.com")  
  }

  return (
    <>
      <div class="nav">
        <A href="/" class="logo">
            <Logo />
        </A>
        <div class="navItems">
            <div onclick={googleGo} class="navItem">
                <SiDiscord fill="var(--text-inverse)" />
            </div>
            <div onclick={googleGo} class="navItem">
                <AiOutlineGithub fill="var(--text-inverse)" />
            </div>
            <div onclick={gamesGo} class="navItem">
                <IoGameController fill="var(--text-inverse)" />
            </div>
            <A href="/options" class="navItem">
                <IoOptions fill="var(--text-inverse)" />
            </A>
        </div>
      </div>
    </>
  );
}

export default Nav;