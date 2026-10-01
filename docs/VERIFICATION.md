# Cómo comprobar esta muestra

[← Proyecto](../README.md) · [Origen](PROVENANCE.md)

## Repetir la comprobación

Node 24.17.0. Sin instalar paquetes: las pruebas usan node:test.

Desde la raíz de este repositorio:

~~~sh
node --test test/*.test.mjs
~~~

Última ejecución local: **6 pruebas aprobadas**, 1 de octubre de 2026. Este es un resultado fechado, no una promesa sobre cambios futuros.

[Workflow y ejecuciones públicas](https://github.com/calinrus-dev/etherune-showcase/actions/workflows/verify.yml). Abre una ejecución para ver el commit exacto y los logs; el badge del README sigue la rama actual.

## Comprobar la interacción

[Demo publicada](https://calinrus-dev.github.io/etherune-showcase/). También puedes servir la raíz con python3 -m http.server 8090 y abrir el puerto local en el navegador. No se necesitan cuentas ni credenciales.

## Qué no certifican estas pruebas

No es una build de Godot ni el juego completo. No implementa guardia, vibración ni el sistema de puntería. Las pruebas del port JavaScript no certifican la integración del control original en Android.

Las pruebas nuevas ejercitan las piezas públicas. No se suman a las cifras históricas de tests del producto como si fueran la misma suite.

## Recorrido y Studio 0.4.0

El showcase se comprobó en navegador con reproducción del vídeo, imágenes y vista móvil. El MP4 principal dura 66,22 segundos, a 1280 × 720 y 30 fps, con vídeo H.264 y sonido AAC del juego. [Contexto y pruebas del producto privado](STUDIO_040.md).
