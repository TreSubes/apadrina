# Contexto para chat de campaña de anuncios — Apadrina

Estoy desarrollando "Apadrina", una plataforma de suscripción mensual (Región Metropolitana, Chile) donde las personas apadrinan a un perro o gato específico de un refugio, pagando desde $5.000 CLP al mes. A cambio reciben fotos, videos y novedades semanales del peludo que eligieron, mientras ese aporte ayuda directamente a su comida, cuidado veterinario y bienestar en el refugio.

## La propuesta de valor real

No estamos vendiendo "una donación a caridad". Estamos vendiendo un vínculo emocional: la persona elige a un animal específico (con nombre, historia, fotos), lo sigue semana a semana, y siente que está acompañando su proceso — sin tener que adoptarlo todavía. Es más parecido a "seguir la vida de alguien que te importa" que a donar. La palabra clave interna que usamos es "peludo" (no "perro" ni "mascota" ni "animal"), porque es cálida e incluye perros y gatos por igual.

## Cómo funciona el sitio (ya construido)

1. La persona entra al sitio, ve un carrusel de peludos destacados en el inicio, o navega por refugio.
2. Elige un peludo, ve su perfil (foto, historia, refugio, comuna, gasto mensual aproximado).
3. Elige un nivel de apadrinamiento: Amigo ($5.000/mes), Compañero ($12.000/mes, el más popular), o Familia Apadrina ($20.000/mes).
4. Llena un formulario corto (nombre, email, Instagram y teléfono opcionales).
5. Confirma el pago con una suscripción mensual real vía MercadoPago (Preapproval — cobro automático recurrente, cancelable cuando quiera).
6. Llega a una página de agradecimiento con confeti, y después a una página "¿Y qué sigue ahora?" con los próximos pasos.

El sitio está hecho en HTML/CSS/JS estático, alojado en Netlify, dominio actual: apadrina-cl.netlify.app (probablemente cambiará a un dominio propio más adelante).

## Modelo operativo con los refugios (importante para el mensaje)

Los refugios suelen tener poco tiempo y personal. Por eso el modelo NO depende de que el refugio le escriba directo a cada padrino — Apadrina actúa como intermediario: el refugio manda fotos/novedades cuando puede, y el equipo de Apadrina se encarga de que le lleguen al padrino de forma consistente. Esto es relevante para publicidad porque significa que podemos prometer "actualizaciones semanales" con confianza, sin depender de la disponibilidad de cada refugio.

## Estado actual del proyecto

- El sitio está funcional de punta a punta: navegación, elección de peludo, checkout, pago real por MercadoPago, confirmación.
- Hoy solo hay 4 animales de ejemplo/demo (Rocky, Mora, Toby, Luna) en 3 refugios ficticios de prueba (Huellitas en Maipú, Patitas Felices en Puente Alto, San Roque en Ñuñoa) — todavía no hay refugios ni animales reales cargados.
- Se envió (o está por enviarse) una encuesta a refugios reales de la RM para evaluar interés y capacidad operativa; después de eso se elegirán 3 refugios piloto reales con 2-3 animales cada uno.
- Es decir: **la campaña de anuncios probablemente no puede lanzarse en serio todavía**, porque el catálogo de peludos aún no es real. Esto hay que tenerlo en cuenta al planificar tiempos de campaña.

## Lo que necesito de este chat

Quiero que me ayudes a pensar la estrategia de adquisición de padrinos: qué canales usar (Instagram, TikTok, Meta Ads, etc.), qué tipo de contenido funciona mejor para este producto emocional, cómo estructurar una campaña de lanzamiento, qué presupuesto tiene sentido para empezar barato, ideas de creatividades/copys, y cómo medir éxito (costo por padrino adquirido, retención de suscripción, etc.). También ayuda pensando en el momento correcto para lanzar publicidad paga versus contenido orgánico, considerando que el catálogo real de animales todavía no está listo.
