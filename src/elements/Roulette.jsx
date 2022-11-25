import React, { useEffect, useRef, useState } from "react";
import { RouletteContainer } from "../styledComponents";
import { product, colors } from "../data";

<<<<<<< HEAD
=======

>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
const Roulette = (props) => {
  const [ctx, setCtx] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
<<<<<<< HEAD
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerWidth * 0.8;
=======
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerWidth * 0.5;
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
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

<<<<<<< HEAD
    context.fillStyle = "#fff";
    context.font = "18px Pretendard";
=======
    context.fillStyle = "black";
    context.font = "21px S-CoreDream-3Light";
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
    context.textAlign = "center";

    for (let i = 0; i < props.options.length; i++) {
      const angle = arc * i + arc / 2;

      context.save();

      context.translate(
<<<<<<< HEAD
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50)
=======
        cw + Math.cos(angle) * (cw - 80),
        ch + Math.sin(angle) * (ch - 80)
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
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
<<<<<<< HEAD
      const ran = Math.floor(Math.random() * props.options.length);

      const arc = 360 / props.options.length;
      const rotate = ran * arc + 3600 + arc * 3 - arc / 4;
=======
      const ran = Math.floor(Math.random() * 360);

      const arc = 360 / props.options.length;
      const rotate = ran + 3600;
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

<<<<<<< HEAD
      setTimeout(
        () => alert(`오늘의 야식은?! ${props.options[ran]} 어떠신가요?`),
        2000
      );
=======
      // setTimeout(
      //   () => alert(`오늘의 야식은?! ${props.options[ran]} 어떠신가요?`),
      //   2000
      // );
>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
    }, 1);
  };

  return (
    <RouletteContainer>
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>

<<<<<<< HEAD
      <button onClick={rotate}>룰렛돌리기</button>
=======
      <button onClick={rotate}>START</button>

>>>>>>> 64b93c844d3b9d5d22194db869b9a4f4fb14d21f
    </RouletteContainer>
  );
};

export default Roulette;
