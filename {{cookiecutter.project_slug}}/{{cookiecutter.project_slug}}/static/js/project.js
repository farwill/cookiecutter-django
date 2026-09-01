{%- if cookiecutter.frontend_pipeline == 'Webpack' -%}
import '../sass/project.scss';

{% endif -%}
/* Project specific Javascript goes here. */
{%- if cookiecutter.use_htmx_alpine == 'y' %}

document.addEventListener("htmx:afterSettle", (event) => {
  if (window.Alpine && event.detail && event.detail.elt) {
    Alpine.initTree(event.detail.elt);
  }
});
{%- endif %}
