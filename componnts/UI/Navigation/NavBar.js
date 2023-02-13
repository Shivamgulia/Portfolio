import { useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Button from '../Button';

import classes from '../../../styles/UI/NavBar.module.css';
import { Router } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  return (
    <div className={classes.navCont}>
      <div className={classes.item1}>
        <h3>Shivam Gulia</h3>
      </div>
      <div className={classes.item2}>
        <ul className={classes.linkList}>
          <li className={classes.link1}>
            <Button
              text="Home"
              function={() => {
                router.push('/');
              }}
            />
          </li>
          <li className={classes.link2}>
            <Button
              text="Projects"
              function={() => {
                router.push('/projects');
              }}
            />
          </li>
          <li className={classes.link3}>
            <Button
              text="Resume"
              function={() => {
                router.push('/resume');
              }}
            />
          </li>
        </ul>

        {/* Mobile nav */}
        <div className={classes.mobNav}>
          {!show && (
            <div
              className={classes.menuButton}
              onClick={() => {
                setShow(true);
              }}
            >
              <AiOutlineMenu size={30} />
            </div>
          )}
          {/* mobile menu */}
          {show && (
            <div className={classes.openMenu}>
              {show && (
                <div
                  className={classes.menuButton}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <AiOutlineClose size={30} />
                </div>
              )}
              <ul className={classes.linkList2}>
                <li className={classes.link11}>
                  <Button
                    text="Home"
                    function={() => {
                      router.push('/');
                    }}
                  />
                </li>
                <li className={classes.link12}>
                  <Button
                    text="Projects"
                    function={() => {
                      router.push('/projects');
                    }}
                  />
                </li>
                <li className={classes.link13}>
                  <Button
                    text="Resume"
                    function={() => {
                      router.push('/resume');
                    }}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
