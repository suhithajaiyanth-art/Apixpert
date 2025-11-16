import { useEffect, useRef } from "react";
import Matter from "matter-js";
import gsap from "gsap";

interface ThrowableElementsProps {
  tags: string[];
}

const ThrowableElements = ({ tags }: ThrowableElementsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const mouseRef = useRef<Matter.Mouse | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Module aliases
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;
    const Events = Matter.Events;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0.3, scale: 0.001 },
    });
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: container.clientWidth,
        height: container.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    // Create boundaries (walls)
    const wallThickness = 50;
    const walls = [
      // Top
      Bodies.rectangle(
        container.clientWidth / 2,
        -wallThickness / 2,
        container.clientWidth,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
      // Bottom
      Bodies.rectangle(
        container.clientWidth / 2,
        container.clientHeight + wallThickness / 2,
        container.clientWidth,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      ),
      // Left
      Bodies.rectangle(
        -wallThickness / 2,
        container.clientHeight / 2,
        wallThickness,
        container.clientHeight,
        { isStatic: true, render: { visible: false } }
      ),
      // Right
      Bodies.rectangle(
        container.clientWidth + wallThickness / 2,
        container.clientHeight / 2,
        wallThickness,
        container.clientHeight,
        { isStatic: true, render: { visible: false } }
      ),
    ];

    // Create floating elements
    const bodies: Matter.Body[] = [];
    tags.forEach((tag, index) => {
      const x = Math.random() * (container.clientWidth - 200) + 100;
      const y = Math.random() * (container.clientHeight - 100) + 50;
      const width = 120 + Math.random() * 30; // Capsule width
      const height = 40 + Math.random() * 10; // Capsule height

      // Capsule = rounded rectangle
      const capsule = Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: height / 2 },
        restitution: 0.7,
        friction: 0.05,
        frictionAir: 0.01,
        render: {
          fillStyle: "#ffffff",
          strokeStyle: "#e0e0e0",
          lineWidth: 2,
        },
        label: tag,
      });
      const capsuleBody = capsule as Matter.Body & {
        plugin: { capsuleHeight?: number; capsuleWidth?: number };
      };
      capsuleBody.plugin = {
        ...capsuleBody.plugin,
        capsuleHeight: height,
        capsuleWidth: width,
      };

      // Add initial velocity for floating effect
      Matter.Body.setVelocity(capsule, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      });

      bodies.push(capsule);
      bodiesRef.current.push(capsule);
    });

    // Add all bodies to the world
    Composite.add(engine.world, [...walls, ...bodies]);

    // Add mouse control
    const mouse = Mouse.create(canvas);
    mouseRef.current = mouse;
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    // Add hover effect
    Events.on(mouseConstraint, "mousedown", (event) => {
      const mousePosition = event.mouse.position;
      bodies.forEach((body) => {
        const distance = Matter.Vector.magnitude(
          Matter.Vector.sub(body.position, mousePosition)
        );
        if (distance < 100) {
          gsap.to(body.render, {
            fillStyle: "#f0f0f0",
            duration: 0.2,
          });
        }
      });
    });

    Events.on(mouseConstraint, "mouseup", () => {
      bodies.forEach((body) => {
        gsap.to(body.render, {
          fillStyle: "#ffffff",
          duration: 0.3,
        });
      });
    });


    // Add gentle floating motion and respawn if out of bounds
    let docked = false;
    const capsuleMarginY = 32; // Margin from bottom (px)
    const capsuleMarginX = 32; // Margin from right (px)
    const floatingAnimation = () => {
      bodies.forEach((body, index) => {
        const time = Date.now() * 0.001;
        const force = {
          x: Math.sin(time + index) * 0.00005,
          y: Math.cos(time + index) * 0.00005,
        };
        // Only apply force if not docked
        if (!body.isStatic) {
          Matter.Body.applyForce(body, body.position, force);
        }

        // Dock the first capsule that falls below the bottom right, keeping it fully visible
        const pluginData = (body as Matter.Body & { plugin?: { capsuleHeight?: number; capsuleWidth?: number } }).plugin;
        const capsuleHeight = pluginData?.capsuleHeight ?? 60;
        const capsuleWidth = pluginData?.capsuleWidth ?? 160;
        const dockY = container.clientHeight - capsuleHeight / 2 - capsuleMarginY;
        const dockX = container.clientWidth - capsuleWidth / 2 - capsuleMarginX;
        if (!docked && body.position.y > dockY) {
          Matter.Body.setPosition(body, {
            x: dockX,
            y: dockY,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
          Matter.Body.setAngularVelocity(body, 0);
          Matter.Body.setAngle(body, 0);
          body.isStatic = true;
          docked = true;
        }

        // If docked, keep it fixed at the bottom right
        if (body.isStatic) {
          Matter.Body.setPosition(body, {
            x: dockX,
            y: dockY,
          });
          Matter.Body.setVelocity(body, { x: 0, y: 0 });
          Matter.Body.setAngularVelocity(body, 0);
          Matter.Body.setAngle(body, 0);
        }
      });
    };

    Events.on(engine, "beforeUpdate", floatingAnimation);

    // Run the renderer and engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create text labels overlay
    const textContainer = document.createElement("div");
    textContainer.style.position = "absolute";
    textContainer.style.top = "0";
    textContainer.style.left = "0";
    textContainer.style.width = "100%";
    textContainer.style.height = "100%";
    textContainer.style.pointerEvents = "none";
    container.appendChild(textContainer);

    const textElements: HTMLDivElement[] = [];
    bodies.forEach((body) => {
      const textEl = document.createElement("div");
      textEl.textContent = body.label;
      textEl.style.position = "absolute";
      textEl.style.fontSize = "14px";
      textEl.style.fontWeight = "bold";
      textEl.style.color = "#000";
      textEl.style.textAlign = "center";
      textEl.style.whiteSpace = "nowrap";
      textEl.style.userSelect = "none";
      textContainer.appendChild(textEl);
      textElements.push(textEl);
    });

    // Update text positions
    const updateTextPositions = () => {
      bodies.forEach((body, index) => {
        const textEl = textElements[index];
        if (textEl) {
          textEl.style.left = `${body.position.x}px`;
          textEl.style.top = `${body.position.y}px`;
          textEl.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        }
      });
      requestAnimationFrame(updateTextPositions);
    };
    updateTextPositions();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      render.canvas.width = containerRef.current.clientWidth;
      render.canvas.height = containerRef.current.clientHeight;
      render.options.width = containerRef.current.clientWidth;
      render.options.height = containerRef.current.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      if (textContainer.parentNode) {
        textContainer.parentNode.removeChild(textContainer);
      }
    };
  }, [tags]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ minHeight: "500px" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default ThrowableElements;
