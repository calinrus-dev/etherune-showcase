# Etherune / El combate empieza en el control.

**Mi videojuego 2D en desarrollo.** Portadores, combate elemental, Resonancia, transformaciones y movimiento aéreo, con laboratorio y editor de escenarios. Estoy trabajando con una diseñadora 2D en su evolución visual.

**Godot · GDScript** · Windows y Android como destinos del proyecto.

![Arena real de Etherune en una captura del proyecto.](assets/arena.png)

[Ver lobby, arena y portadores](docs/DEMOSTRACIONES.md)

## El control tiene que soltar cuando tú sueltas

[**Probar el laboratorio de movimiento →**](https://calinrus-dev.github.io/etherune-showcase/) · [Curva y control de propiedad del gesto](samples/stick.js) · [Pruebas](test/stick.test.mjs)

Un segundo dedo no debe robar el stick. Perder foco no puede dejar una acción pegada. La diagonal debe respetar el límite del vector. Son fallos pequeños hasta que pierdes una partida por ellos.

La curva direccional está portada desde `TouchStick.gd`; la gestión aislada del gesto y la interfaz de navegador son nuevas para esta publicación. No es una versión web del juego.

[![Pruebas de la muestra](https://github.com/calinrus-dev/etherune-showcase/actions/workflows/verify.yml/badge.svg)](https://github.com/calinrus-dev/etherune-showcase/actions/workflows/verify.yml)

~~~sh
node --test test/*.test.mjs
~~~

## Sensación y decisiones

La curva tiene una zona muerta por eje y una fuerza mínima al activarse. Eso produce un salto deliberado en el umbral; no se vende como una curva suave. El laboratorio expone los valores para que puedas discutir la decisión, no solo mirar un vídeo.

El juego sigue evolucionando: combate, lectura visual y contenido. Las capturas documentan escenas reales; no acreditan multijugador online, una exportación comercial autónoma ni pruebas en todos los dispositivos.

[Sistemas del juego](docs/COMPONENTES.md) · [Estado de desarrollo](docs/ESTADO.md) · [Origen y límites](docs/PROVENANCE.md) · [Verificación](docs/VERIFICATION.md) · [Portfolio](https://github.com/calinrus-dev/portfolio)


[Instagram @c4linrus](https://www.instagram.com/c4linrus/) · [LinkedIn / calinrus](https://www.linkedin.com/in/calinrus/)
