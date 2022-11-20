import React, { useEffect, useRef, useState } from "react";
import { RouletteContainer } from "../styledComponents";
import { product, colors } from "../data";

const Roulette = () => {
  const [ctx, setCtx] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerWidth * 0.8;
    const context = canvas.getContext("2d");
    const [cw, ch] = [canvas.width / 2, canvas.height / 2];
    const arc = Math.PI / (product.length / 2);

    for (let i = 0; i < product.length; i++) {
      context.beginPath();
      context.fillStyle = colors[i % (colors.length - 1)];
      context.moveTo(cw, ch);
      context.arc(cw, ch, cw, arc * (i - 1), arc * i);
      context.fill();
      context.closePath();
    }

    context.fillStyle = "#fff";
    context.font = "18px Pretendard";
    context.textAlign = "center";

    for (let i = 0; i < product.length; i++) {
      const angle = arc * i + arc / 2;

      context.save();

      context.translate(
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50)
      );

      context.rotate(angle + Math.PI / 2);

      product[i].split(" ").forEach((text, j) => {
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
      const ran = Math.floor(Math.random() * product.length);

      const arc = 360 / product.length;
      const rotate = ran * arc + 3600 + arc * 3 - arc / 4;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

      setTimeout(
        () => alert(`오늘의 야식은?! ${product[ran]} 어떠신가요?`),
        2000
      );
    }, 1);
  };

  return (
    <RouletteContainer>
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>

      <button onClick={rotate}>룰렛돌리기</button>
    </RouletteContainer>
  );
};

export default Roulette;
