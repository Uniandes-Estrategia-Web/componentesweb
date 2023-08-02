---
title: ROLES Y PERMISOS
sections:
- Introducción

---

Los roles y permisos son componentes esenciales del mecanismo de control de acceso del sistema. Le permiten definir y administrar roles de usuario, asignar permisos específicos a esos roles y controlar qué acciones y funcionalidades puede realizar cada usuario dentro de su sitio. Esto garantiza que el contenido y la funcionalidad de su sitio web estén debidamente restringidos y accesibles en función de los roles de los usuarios.


## Introducción

Los roles en Drupal son conjuntos de permisos agrupados y asignados a los usuarios. Al asignar roles a los usuarios, puede controlar qué acciones y operaciones pueden realizar en el sitio web.

los permisos son los controles de acceso granulares que determinan lo que un usuario puede hacer dentro de su sitio de Drupal.


<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">1. Planificado:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Los usuarios con permisos del sitio pueden crear elementos de contenido individuales previamente ya estructurados (artículos, publicaciones de blog, páginas básicas, Landings, entre otras), en función de ese tipo de contenido. Lo que facilita la administración y organización de diferentes tipos de contenido en un sitio.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">2. Archivos:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Están asociados con el contenido mediante el uso de campos de archivo, dichos campos permiten a los usuarios cargar archivos o seleccionar archivos existentes del sistema y vincularlos a entidades o tipos de contenido específicos.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">3. Contenidos:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-warning btn-cta m-2">Gestor (Solo contenido propio)<i class="fa fa-warning"></i></span>
        </div>
        <p>El "contenido" se refiere a la información o los datos que se muestran en un sitio web. Puede incluir varios tipos de contenido, como artículos, publicaciones de blog, páginas básicas, Landings, entre otras. Cada contenido cuenta con su propia URL única (Alias URL), al gestionar cada contenido se podrá especificar en el campo “Idioma” en que lenguaje al que va a estar dirigido. Se permite cargar y administrar archivos multimedia como archivos tal y como lo hace el tipo de contenido landing.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">4. Librería de bloques personalizados:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Para mejorar las capacidades multimedia y textos, se ofrece módulos adicionales y soluciones aportadas como la capacidad de gestionar bloques personalizados que proporcionan un marco sólido para el manejo, por ejemplo, puede crear tipos de medios para imágenes, textos y videos, estos tipos de bloques van ligados al tipo de contenido como lo son las páginas básicas.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">5. Menús:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Los menús representan el contenedor o la estructura que contiene los elementos de menú individuales. Puede crear varios menús para servir diferentes propósitos en su sitio web. Por ejemplo, puede tener un "Menú principal" o "Menú de pie de página" que contenga enlaces a secciones importantes de su sitio, cada elemento del menú representa una página, contenido o URL específicos en los que los usuarios pueden hacer clic para navegar a un destino en particular. Puede realizar varias tareas, incluida la creación de menús, la adición de elementos de menú, la reorganización del orden de los elementos, la creación de submenús y la asignación de menús a regiones específicas.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">6. Los modos de visualización:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Brindan una forma flexible y configurable de controlar cómo se presenta el contenido a los usuarios, lo que permite definir múltiples vistas del mismo contenido para diferentes casos de uso.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">7. Structure sync:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>El módulo Structure Sync pantallas de interfaz de administración para sincronizar contenido que también podría considerarse configuración. Incluye elementos de menú, bloques personalizados y términos de taxonomía.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">8. Tipos de paragraph:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Cada tipo de párrafo tendría su propio conjunto de campos, como un campo de imagen, un campo de texto o un campo de enlace, permiten a los usuarios definir y configurar campos específicos para cada componente de párrafo, lo que brinda flexibilidad a los creadores de contenido para organizar y ensamblar contenido en una página.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2"> 9. Tipos de comentario:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Son una característica común que se utiliza para permitir que los usuarios proporcionen comentarios, discutan el contenido y participen en conversaciones en un sitio web, los tipos de comentarios son anónimos, usuarios autenticados, encadenados y privados.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">10. Tipos de contenido:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Se crean y personalizan mediante la interfaz de administración. Al crear un tipo de contenido, puede definir varios campos y configuraciones que determinan la estructura y el comportamiento del contenido. Algunos de los tipos de campos comunes incluyen campos de texto, campos de imagen, entre otros. Los desarrolladores actualmente pueden realizar este tipo de acciones.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">11. Tipos de multimedia</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Se proporciona un sistema de administración de medios flexible y extensible que permite a los desarrolladores del sitio definir y configurar diferentes tipos de multimedia (formatos de archivo permitidos) según sus requisitos específicos.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">12. Webform:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-warning btn-cta m-2">Gestor (propio)<i class="fa fa-warning"></i></span>
        </div>
        <p>Le permite crear y administrar formularios en su sitio web. Proporciona una interfaz fácil de usar para crear y configurar varios tipos de formularios, como formularios de contacto, encuestas, formularios de solicitud y más, estos pueden incluir campos tales como texto, casillas de verificación, correo electrónico, carga de archivos, entre otros.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">13. Micon:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Un módulo de paquetes de iconos, los cuales son definidos por los administradores.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">14. Conditional fields:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Es un módulo que proporciona una forma de mostrar u ocultar campos dinámicamente según la entrada del usuario, lo que hace que sus formularios sean más interactivos y flexibles.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">15. Apariencia del sitio:</h4>
            <span class="btn-warning btn-cta m-2">Admin (Configuración)<i class="fa fa-warning"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Los administradores tendrán la capacidad de personalizar la apariencia de la plantilla (Colores, logos, favicons, entre otros).</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">16. Módulos:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Son paquetes de código que amplían la funcionalidad del sistema principal. Le permiten agregar nuevas funciones, personalizar la funcionalidad existente e integrarse con sistemas de terceros, solo los desarrolladores tienen la capacidad de realizar este tipo de acciones.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">17. Sistema:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Se puede acceder a esta configuración y modificarla a través de la interfaz de administración, Estas son algunas de las configuraciones básicas: Nombre del sitio, URL limpias, Configuración de fecha y hora, Informe de errores, Registro de usuarios, Estos son solo algunos ejemplos de la configuración básica del según la versión y los módulos específicos instalados en su sitio, es posible que tenga configuraciones adicionales disponibles para configurar y personalizar.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">18. Autoría del contenido:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Permite a los usuarios crear y publicar fácilmente varios tipos de contenido, como artículos, publicaciones de blog, páginas, imágenes, videos y más. Implica las siguientes tareas: Creación de contenido, Adición de multimedia, Opciones de publicación, Moderación de contenido, entre otras.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">19. Interfaz de usuario:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Elementos visuales e interactivos que permiten a los usuarios interactuar con el sistema de administración de contenido y realizar diversas tareas. Incluye una variedad de componentes y funciones que permiten a los usuarios administrar contenido, configurar ajustes, instalar módulos, crear menús, personalizar temas y realizar otras tareas administrativas.</p>
        <p>Ejemplo: Barra de herramientas de administración, Administración de contenido, Diseño de bloques, Temas, Módulos, Menús y navegación. Solo los desarrolladores pueden definir y configurar.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">20. Búsqueda y metadatos:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Son aspectos esenciales de la gestión y organización del contenido de un sitio web. La función de búsqueda permite a los usuarios buscar contenido en función de palabras clave, filtros y otros parámetros. Los resultados de la búsqueda se pueden mostrar en varios formatos, incluida una lista de enlaces, fragmentos de contenido o vistas personalizadas.</p>
        <p>Los metadatos juegan un papel crucial en la optimización de motores de búsqueda (SEO). Los motores de búsqueda utilizan metadatos para comprender e indexar el contenido del sitio web de manera efectiva, pueden incluir varios atributos, como título, descripción, etiquetas, palabras clave, entre otros.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">21. Desarrollo:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Permite a los desarrolladores ampliar la funcionalidad de un sitio al incluir secuencias de comandos o bibliotecas adicionales. Al insertar secuencias de comandos personalizadas, es importante seguir las mejores prácticas para evitar conflictos con otras secuencias de comandos y garantizar que se implementen medidas de seguridad para evitar la inyección de código malicioso.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">22. Multimedia:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Con el módulo de Medios, puede organizar sus archivos multimedia en diferentes carpetas o categorías, agregar metadatos para describir sus medios y buscar y navegar fácilmente a través de su biblioteca de medios. Solo los desarrolladores definen este tipo de módulos.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">23. Regional e idioma:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Opciones de configuración que le permiten personalizar cómo su sitio web maneja diferentes idiomas y configuraciones regionales. Estas configuraciones son esenciales para crear sitios web multilingües o sitios web dirigidos a regiones específicas.</p>
        <p>La configuración regional en generalmente incluye opciones como formatos de fecha, zonas horarias, formatos de números y símbolos de moneda. La configuración de idioma le permite administrar varios idiomas en su sitio web, cada contenido tendrá una pestaña la cual los usuarios definen a que lenguaje va dirigido.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">24. Servicios web:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>Puede interactuar con sistemas o aplicaciones externas consumiendo sus servicios web. Esto permite que aproveche las funcionalidades y los datos de otros sistemas. Google Analytics es un popular servicio de análisis web proporcionado por Google que permite a los propietarios de sitios web realizar un seguimiento y analizar varios aspectos del rendimiento de su sitio web. Proporciona información valiosa sobre el comportamiento de los visitantes, las fuentes de tráfico, las tasas de conversión y otras métricas importantes.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">25. Flujos de trabajo:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Los flujos de trabajo brindan un enfoque estructurado para la creación, revisión y publicación de contenido, lo que le permite controlar el proceso y garantizar la calidad y la coherencia del contenido.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">26. Usuarios:</h4>
            <span class="btn-red btn-cta m-2">Admin <i class="fa fa-times-circle-o"></i></span>
            <span class="btn-red btn-cta m-2">Gestor <i class="fa fa-times-circle-o"></i></span>
        </div>
        <p>Los desarrolladores pueden crear roles de usuario personalizados y definir sus permisos para controlar lo que cada rol puede hacer en el sitio web.</p>
    </div>
</div>

<div class="callout-block panel">
    <div class="icon-holder">
        <i class="fa fa-star"></i>
    </div>
    <div class="content">
        <div class="flex-container">
            <h4 class="callout-title my-auto m-2">27. Manuales de usuario:</h4>
            <span class="btn-green btn-cta m-2">Admin <i class="fa fa-check-circle-o"></i></span>
            <span class="btn-green btn-cta m-2">Gestor <i class="fa fa-check-circle-o"></i></span>
        </div>
        <p>En esta guía podrás encontrar las herramientas que necesites para poder conocer mas a Estrategia Web.</p>
    </div>
</div>