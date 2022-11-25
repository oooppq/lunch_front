import React, { useEffect, useRef, useState } from "react";
import { RouletteContainer } from "../styledComponents";
import { product, colors } from "../data";
import emptyIcon from "../img/empty.png";
import { useNavigate } from "react-router-dom";
import closeIcon from "../img/close.png";

const Roulette = (props) => {
  const [ctx, setCtx] = useState();
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [showIndex, setShowIndex] = useState(false);

  useEffect(() => {
    if (!props.options.length) return;
    const canvas = canvasRef.current;
    canvas.width = document.querySelector(".canvas-outer").clientWidth * 0.9;
    canvas.height = document.querySelector(".canvas-outer").clientWidth * 0.9;
    const context = canvas.getContext("2d");
    const [cw, ch] = [canvas.width / 2, canvas.height / 2];
    const arc = Math.PI / (props.options.length / 2);

    for (let i = 0; i < props.options.length; i++) {
      context.beginPath();
      context.fillStyle = colors[i % (colors.length - 1)];
      context.moveTo(cw, ch);
      context.arc(cw, ch, cw, arc * (i - 1), arc * i);
      context.fill();
      context.closePath();
    }

    context.fillStyle = "black";
    context.font = "21px S-CoreDream-3Light";
    context.textAlign = "center";

    for (let i = 0; i < props.options.length; i++) {
      const angle = arc * i + arc / 2;

      context.save();

      context.translate(
        cw + Math.cos(angle) * (cw - 80),
        ch + Math.sin(angle) * (ch - 80)
      );

      context.rotate(angle + Math.PI / 2);

      props.options[i].split(" ").forEach((text, j) => {
        context.fillText(text, 0, 30 * j);
      });

      context.restore();
    }
    setCtx(context);
  }, []);

  const rotate = () => {
    const canvas = canvasRef.current;
    canvas.style.transform = `initial`;
    canvas.style.transition = `initial`;

    setTimeout(() => {
      const ran = Math.floor(Math.random() * 360);

      const arc = 360 / props.options.length;
      const rotate = ran + 3600;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

      // setTimeout(
      //   () => alert(`오늘의 야식은?! ${props.options[ran]} 어떠신가요?`),
      //   2000
      // );
    }, 1);
  };

  return (
    <RouletteContainer>
      <div className="canvas-outer">
        {props.options.length ? (
          <div>
            {/* <div className="index">
              <p
                onClick={() => {
                  setShowIndex(!showIndex);
                }}
              >
                담은 식당 & MENU ▼
              </p>
              {showIndex ? (
                <ul className="rmlist">
                  {props.options.map((opt) => {
                    return (
                      <li>
                        {opt}{" "}
                        <img
                          src={closeIcon}
                          alt=""
                          onClick={() => {
                            props.setOptions(
                              props.options.filter((option) => option != opt)
                            );
                          }}
                        />
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <></>
              )}
            </div> */}
            <canvas ref={canvasRef}></canvas>

            <button onClick={rotate}>START</button>
          </div>
        ) : (
          <p>
            <img className="empty" src={emptyIcon} alt="" /> <br />
            <span>돌림판이 비어있어요</span>
            <br />
            <br />
            <span
              className="add"
              onClick={() => {
                navigate("/index");
              }}
            >
              + 돌림판 채우러가기
            </span>
          </p>
        )}
      </div>
    </RouletteContainer>
  );
};

export default Roulette;
